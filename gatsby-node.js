const contributorsList = require('./contributors.json')
let stats
if (process.env.ENV_TYPE === 'mock') {
  stats = require('./mock-stats-generator')
} else {
  stats = require('./stats-generator')
}

const findCountryCode = require('./country-codes')

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
  getNodesByType,
}) => {
  const { createNode } = actions

  return Promise.all(
    Object.keys(contributorsList).reduce((batch, item) => {
      if (batch[batch.length - 1].length === 20) {
        batch.push([item])
      } else {
        batch[batch.length - 1].push(item)
      }
      return batch
    }, [[]])
      .map(contributors => stats.fetchCountStats(contributors))
  ).then((allContributors) => allContributors.reduce((obj, nobj) => ({ ...obj, ...nobj }), {}))
    .then(contributorStats => {
      // loop through data and create Gatsby nodes
      Object.entries(contributorStats).forEach(([contributor, information]) => {

        createNode({
          ...information,
          ...contributorsList[contributor],
          githubUserId: contributor,
          id: createNodeId(`${contributor}`),
          countryCode: findCountryCode(contributorsList[contributor].country),
          parent: null,
          children: [],
          internal: {
            type: 'contributor',
            content: JSON.stringify(information),
            contentDigest: createContentDigest(contributor),
          },
        })
      })
    }).catch(console.error)
}
