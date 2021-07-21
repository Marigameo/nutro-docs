module.exports = {
  siteMetadata: {
    siteTitle: `Nutro Docs`,
    defaultTitle: `Nutro Docs`,
    siteTitleShort: `Nutro Docs`,
    siteDescription: `Simple documentation demonstrating the usage of nutro-components - simple UI components build based on popular apps & inspirations`,
    siteUrl: `https://nutro.netlify.app`,
    siteAuthor: `@Marigameo`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        repositoryUrl: `https://github.com/Marigameo/nutro-docs`,
        githubUrl: `https://github.com/Marigameo/nutro-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `YOUR_ANALYTICS_ID`,
    //   },
    // },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://nutro.netlify.app`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
