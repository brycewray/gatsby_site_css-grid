module.exports = {
  siteMetadata: {
    title: `brycewray.com`, // was Gatsby Default Starter
    titleTemplate: "%s • brycewray.com",
    description: `brycewray.com — Opinions, observations, nerdiness.`,
    author: `@BryceWrayTX`,
    url: "https://www.brycewray.com",
    image: "/images/typewriter-monochrome_2242164_1280x720_60pct.jpg",
    twitterUsername: "@BryceWrayTX",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {        
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900, 
           },
         },
         {
           resolve: `gatsby-remark-smartypants`,
           options: {
             dashes: "oldschool",
             ellipse: false,
           },
         },
         `gatsby-remark-numbered-footnotes`,
         {
           resolve: `gatsby-remark-prismjs`,
           options: {},
         },
         {
           resolve: `gatsby-remark-embed-video`,
           options: {
             beginMarker: `{{`,
             endMarker: `}}`,
             width: 640,
             related: false,
             noIframeBorder: true,
           },
         },
         `gatsby-remark-responsive-iframe`,
        ],
      },
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
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    {
      resolve: `@debiki/gatsby-plugin-talkyard`,
      options: {
        talkyardServerUrl: 'https://comments-for-brycewray-com.talkyard.net',
      },
    },
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-146418828-1",
      },
    },
  ],
}
