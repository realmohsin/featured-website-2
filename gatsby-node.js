const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allContentfulRomanoInnerPage {
        nodes {
          slug
        }
      }
    }
  `)
  result.data.allContentfulRomanoInnerPage.nodes.forEach(({ slug }) => {
    createPage({
      path: slug,
      component: path.resolve(`./src/templates/inner-page.js`),
      context: {
        slug
      }
    })
  })
}
