const contributors = require('./contributors')
const stats = require('./stats-generator')

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
  getNodesByType,
}) => {
  const { createNode } = actions

  stats.fetchCountStats(Object.keys(contributors)).then(contributorStats => {
    // loop through data and create Gatsby nodes
    Object.entries(contributorStats).forEach(([contributor, information]) => {
      createNode({
        ...information,
        ...contributors[contributor],
        githubUserId: contributor,
        id: createNodeId(`${contributor}`),
        parent: null,
        children: [],
        internal: {
          type: 'contributor',
          content: JSON.stringify(information),
          contentDigest: createContentDigest(contributor),
        },
      })
    })
  })

  return
}
