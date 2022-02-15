const path = require("path");
const fs = require("fs");
const { importer } = require("dive-log-importer");

const portfolioProjectTemplate = path.resolve(
  `./src/nodePages/PortfolioProject.js`
);
const divesExportFile = `./content/dives/all.xml`;

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions;

  // Dives -------------------------------------
  const xml = fs.readFileSync(divesExportFile, "utf-8");
  const logbook = importer(xml);

  logbook.dives.forEach(dive => {
    // Data can come from anywhere, but for now create it manually

    const meta = {
      id: createNodeId(`my-dive-${dive.number}`),
      parent: null,
      internal: {
        type: `DiveNode`,
        mediaType: `application/json`,
        contentDigest: createContentDigest(dive),
      },
    };

    createNode({ ...dive, ...meta });
  });
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  // Portfolio projects ------------------------

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
  `);

  // Handle errors
  if (portfolioProjects.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  portfolioProjects.data.allPortfolioYaml.edges.forEach(({ node }) => {
    createPage({
      path: `/p/${node.slug}`,
      component: portfolioProjectTemplate,
      context: {
        id: node.id,
      },
    });
  });
};
