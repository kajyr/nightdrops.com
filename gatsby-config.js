const path = require("path");

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-root-import`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Carlo Panzi | nightdrops`,
        short_name: `nightdrops.com`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/icon-144.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: path.join(__dirname, `content`, `portfolio`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolioImages`,
        path: path.join(__dirname, `content`, `images`),
      },
    },
  ],
  siteMetadata: {
    title: "Carlo Panzi | nightdrops",
    url: "https://www.nightdrops.com",
    twitterUsername: "@kajyr",
  },
};
