const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const appRoutes = require('./app-routes')

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
  getNodesByType,
}) => {
  const { createNode } = actions

  // loop through data and create Gatsby nodes
  Object.entries(appRoutes.apps).forEach(([type, item]) => {
    Object.entries(item).forEach(([name, content]) => {
      createNode({
        ...content,
        category: type,
        name: name,
        id: createNodeId(`${type}-${content.url}`),
        parent: null,
        children: [],
        internal: {
          type: 'app',
          content: JSON.stringify(content),
          contentDigest: createContentDigest(content),
        },
      })
    })
  })

  return
}
