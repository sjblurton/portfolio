module.exports = {
  siteMetadata: {
    title: `Simon Blurton's developer portfolio`,
    siteName: "Portfolio: Simon Blurton",
    description: `Simon Blurton, full stack web developer portfolio.`,
    author: `@SimonBlurton`,
    siteUrl: `https://simon-blurton.netlify.app/`,
    facebookImage: "https://simon-blurton.netlify.app/facebook.png",
    twitterImage: "https://simon-blurton.netlify.app/twitter.png",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Simon Blurton, web developer`,
        short_name: `Simon Blurton`,
        start_url: `/`,
        background_color: `#56316D`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#56316D`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
