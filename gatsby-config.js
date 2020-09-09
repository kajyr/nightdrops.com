module.exports = {
  plugins: [
    // Make sure this plugin is first in the array of plugins
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GA_TRACKING_ID,
        head: true,
      },
    },
    `gatsby-plugin-react-helmet`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
  siteMetadata: {
    title: "Carlo Panzi | nightdrops",
    url: "https://www.nightdrops.com",
    twitterUsername: "@kajyr",
  },
}
