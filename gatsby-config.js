require("./config/env")

module.exports = {
  siteMetadata: {
    title: `Hosam Darwish`,
    description: `Personal portfolio of Hosam Darwish`,
    author: `@gatsbyjs`,
    siteUrl: `https://www.hosamdarwish.nl`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: ["NODE_ENV", "COMMIT_HASH", "VERSION"], // Add ENV vars to whitelist here and they'll show up in your client-side
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-typescript-checker`,
    `gatsby-plugin-tslint`,
    `gatsby-plugin-react-helmet`,
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
        background_color: `#00ABEC`,
        theme_color: `#00ABEC`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        sitemapSize: 5000,
      },
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          // Security Headers
          "/*": [
            `X-Frame-Options: SAMEORIGIN`,
            `X-XSS-Protection: 1; mode=block`,
            `X-Content-Type-Options: nosniff`,
            `Referrer-Policy: same-origin`,
          ],
        },
        mergeSecurityHeaders: false,
        mergeLinkHeaders: false,
        mergeCachingHeaders: false,
      },
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_TOKEN,
        schemas: {
          homepage: require("./src/schemas/homepage.json"),
        },
      },
    },
    `gatsby-plugin-robots-txt`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
