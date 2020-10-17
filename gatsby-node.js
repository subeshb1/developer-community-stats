const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const contributorsList = require('./contributors.json')
let stats
if (process.env.ENV_TYPE === 'mock') {
  stats = require('./mock-stats-generator')
} else {
  stats = require('./stats-generator')
}

const findCountryCode = require('./country-codes')


exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/readme-profile.js`)
  return graphql(
    `
      {
        allMarkdownRemark(
          limit: 1000
        ) {
          edges {
            node {
              id
              fields {
                slug
                githubUserId
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((post, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node

      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug,
          githubUserId: post.node.fields.githubUserId,
          previous,
          next,
        },
      })
    })
  })
}


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    let value
    if (node.frontmatter.type === 'doc') {
      value = `${createFilePath({ node, getNode }).replace(/\/$/, '')}`
    } else {
      value = `/profile${createFilePath({ node, getNode }).replace(/\/$/, '')}`
    }

    createNodeField({
      name: `slug`,
      node,
      value,
    })
    createNodeField({
      name: `githubUserId`,
      node,
      value: value.split('/').splice(-1)[0],
    })
  }
}


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
