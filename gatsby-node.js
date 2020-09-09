const path = require("path")
const portfolioProjectTemplate = path.resolve(
  `./src/nodePages/PortfolioProject.js`
)

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  ymlDoc.forEach(element => {
    createPage({
      path: element.path,
      component: require.resolve("./src/templates/basicTemplate.js"),
      context: {
        pageContent: element.content,
        links: element.links,
      },
    })
  })
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const portfolioProjects = await graphql(`
    {
      allPortfolioYaml {
        edges {
          node {
            slug
            id
          }
        }
      }
    }
  `)

  // Handle errors
  if (portfolioProjects.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  portfolioProjects.data.allPortfolioYaml.edges.forEach(({ node }) => {
    createPage({
      path: `/p/${node.slug}`,
      component: portfolioProjectTemplate,
      context: {
        id: node.id,
      },
    })
  })
}
