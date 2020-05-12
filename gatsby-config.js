module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    social: [
      {
        name: "Source",
        url: "https://github.com/epilande/gatsby-theme-gallery",
      },
      {
        name: "Twitter",
        url: "https://twitter.com/_epilande",
      },
      {
        name: "GitHub",
        url: "https://github.com/epilande",
      },
    ],
  },
  plugins: [
 
     `gatsby-theme-gallery`,
     "gatsby-plugin-typescript",
     "gatsby-plugin-emotion",
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-performance-metrics`,
      options: {
        firstPaint: false,
        firstContentfulPaint: true,
        firstInputDelay: true,
        useLogging: true,
        useGoogleAnalytics: false
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset:100
      }
    },    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
