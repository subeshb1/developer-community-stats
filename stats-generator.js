require('dotenv').config()
const fetch = require('node-fetch');
const token = process.env.GITHUB_TOKEN
const apiUrl = process.env.GITHUB_GRAPHQL_URL

const defaultConfig = {
  followersCount: true,
  issuesCount: true,
  pullRequestCount: true,
  contributionCount: true,
  currentYearContributionCount: true,
  repositoryCount: true,
  countPrivate: true,
  repositoryContributedCount: true,
  languageCount: true,
  includeContributedRepoLanguage: true,
  includePrivate: true,
  excludedLanguages: [].map(str => str.toLocaleLowerCase())
}

const config = {
  ...defaultConfig
}

/**
 * Github Graphql query helper
 */
const githubQuery = async (query) => fetch(apiUrl, {
  method: 'POST',
  headers: {
    Authorization: `bearer ${token}`
  },
  body: JSON.stringify({
    query
  })
})

/**
 * Github REST API query helper
 */
const githubAPIQuery = async (query) => fetch(query, {
  method: 'GET',
  headers: {
    Authorization: `bearer ${token}`
  }
})


const extractGraphqlJson = res => {
  return res.json().then(res => {
    if (res.errors && res.errors.length > res.data.length) {
      throw res
    }
    return res
  })
}

const statsQuery = `
{
  viewer {
    repositories(isFork: false,${config.includePrivate ? '' : 'privacy: PUBLIC'}) {
      totalCount
    }
    pullRequests {
      totalCount
    }
    issues {
      totalCount
    }
    followers {
      totalCount
    }
    contributionsCollection {
      contributionYears
    }
    repositoriesContributedTo${config.includePrivate ? '' : '(privacy: PUBLIC)'} {
      totalCount
    }
  }
}
`

const contributionPerYearQuery = year => `
year${year}: contributionsCollection(from: "${year}-01-01T00:00:00Z", to: "${year}-12-31T23:59:59Z") {
  contributionCalendar {
    totalContributions
  }
}
`
const userCountStatsQuery = user => `
  ${user.replace(/-/g, "___kebab___").replace(/^([0-9])/, (match) => {
  return "__NUMBER__" + match
})}: user(login: "${user}") {
    repositories(isFork: false,${config.includePrivate ? '' : 'privacy: PUBLIC'}) {
      totalCount
    }
    pullRequests {
      totalCount
    }
    issues {
      totalCount
    }
    followers {
      totalCount
    }
    avatarUrl
    contributionsCollection {
      contributionYears
      contributionCalendar {
        totalContributions
      }
    }
    repositoriesContributedTo${config.includePrivate ? '' : '(privacy: PUBLIC)'} {
      totalCount
    }
  }
`

const fetchCountStats = (users) => {
  const perUserQuery = users.map(userCountStatsQuery)

  const statsQuery = `
    {
      ${perUserQuery.join("\n")}
    }
    `

  return githubQuery(statsQuery).then(extractGraphqlJson).then(res => Object.entries(res.data).reduce((obj, [key, value]) => {
    if (value === null) {

      return obj
    }
    return { ...obj, [key]: value }
  }, {})).then(res => {
    return Object.entries(res).reduce((acc, user) => {
      acc[user[0].replace(/___kebab___/g, "-").replace(/__NUMBER__/g, "")] = extractCountStats(user[1])
      return acc
    }, {})
  })
}


const extractCountStats = (res) => {
  const data = res;
  return {
    repositoryCount: data.repositories.totalCount,
    repoContributedCount: data.repositoriesContributedTo.totalCount,
    contributionYears: data.contributionsCollection.contributionYears,
    followersCount: data.followers.totalCount,
    issuesCount: data.issues.totalCount,
    pullRequestsCount: data.pullRequests.totalCount,
    avatarUrl: data.avatarUrl,
    firstContribution: data.contributionsCollection.contributionYears.slice(-1)[0],
    thisYearContribution: data.contributionsCollection.contributionCalendar.totalContributions
  }
}

const fetchContributionPerYear = async (yearArray) => {
  let queryArray = []
  queryArray = queryArray.concat(yearArray.map(contributionPerYearQuery))
  const query = `
  {
    viewer {
      ${queryArray.join('\n')}
    }
  }
  `
  const res = await githubQuery(query);
  const res_1 = await extractGraphqlJson(res);
  return res_1.data.viewer;
}


const fetchRepoLanguageAndStars = (externalRepo = false) => {
  if (externalRepo && !config.includeContributedRepoLanguage) {
    return { repoLanguages: [], stargazerCount: 0 }
  }
  const schemaKey = externalRepo ? 'repositoriesContributedTo' : 'repositories';
  const forkKey = externalRepo ? '' : 'isFork: false,';
  let repoLanguages = [];
  let hasNext = null
  let cursor
  let stargazerCount = 0
  function fetchPerPage() {
    if (hasNext === false) {
      return true
    }
    const query = `
    {
      viewer {
        ${schemaKey}(${forkKey} ${config.includePrivate ? '' : 'privacy: PUBLIC'}, first: 100 ${hasNext ? `,after: "${cursor}"` : ''}) {
          pageInfo{
            endCursor
            hasNextPage
          }
          nodes {
            stargazerCount
            languages(first: 100) {
              nodes {
                name
              }
            }
          }
        }
      }
    }
    `
    return githubQuery(query)
      .then(extractGraphqlJson)
      .then(res => res.data.viewer)
      .then(data => {
        cursor = data[schemaKey].pageInfo.endCursor
        hasNext = data[schemaKey].pageInfo.hasNextPage
        repoLanguages = repoLanguages.concat(data[schemaKey].nodes.flatMap(node => node.languages.nodes.map(language => language.name)))
        stargazerCount += data[schemaKey].nodes.reduce((acc, item) => acc + item.stargazerCount, 0)
        return fetchPerPage()
      });
  }

  return fetchPerPage().then(() => ({ repoLanguages, stargazerCount }))

}
const fetchCompoundStats = async (countStats) => {
  const responses = await Promise.all([
    fetchContributionPerYear(countStats.contributionYears),
    fetchRepoLanguageAndStars(),
    fetchRepoLanguageAndStars(true)
  ]);
  const contributionPerYear = Object.entries(responses[0]).reduce((acc, item) => {
    acc[item[0].replace('year', '')] = item[1].contributionCalendar.totalContributions;
    return acc;
  }, {});
  const languages = responses[1].repoLanguages.concat(responses[2].repoLanguages).reduce((acc, language) => {
    if (config.excludedLanguages.includes(language.toLocaleLowerCase())) {
      return acc
    }
    if (acc[language]) {
      acc[language]++;
    } else {
      acc[language] = 1;
    }
    return acc;
  }, {});
  return {
    ...countStats,
    contributionPerYear,
    languages,
    languageCount: Object.keys(languages).length,
    stargazerCount: responses[1].stargazerCount
  };
}



module.exports = {
  fetchCountStats
}
