module.exports = {
  siteMetadata: {
    title: `brycewray.com`, // was Gatsby Default Starter
    description: `brycewray.com — Opinions, observations, nerdiness.`,
    author: `@BryceWrayTX`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {},
      plugins: [],
    },
    {
      resolve: `gatsby-plugin-manifest`, 
      options: {
        name: `brycewray.com`, // was gatsby-starter-default
        short_name: `brycewray.com`,
        start_url: `/`,
        background_color: `#0000d1`,
        theme_color: `#0000d1`,
        display: `minimal-ui`,
        icon: `src/images/favicon-512x512.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
