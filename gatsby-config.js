module.exports = {
  siteMetadata: {
    title: `Clara Azevedo - Fisioterapêuta`,
    titleTemplate: `%s | Clara Azevedo`,
    description: `Site da fisioterapêuta, Clara Azevedo.`,
    twitterUsername: `@teufel8`,
    url: `https://claraazevedo.com.br`,
    image: `/images/Marca.png`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        icon: "src/public/static/Marca.ico",
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
