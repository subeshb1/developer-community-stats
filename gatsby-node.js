const contributors = require('./contributors')
const stats = require('./stats-generator')

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
  getNodesByType,
}) => {
  const { createNode } = actions

  // loop through data and create Gatsby nodes
  Object.entries(contributors).forEach(([contributor, information]) => {
    createNode({
      ...information,
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
  return
}
