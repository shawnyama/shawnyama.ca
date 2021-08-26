module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Shawn Yama",
  },
  plugins: [
    "gatsby-plugin-sass", 
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-fontawesome-css",
    "gatsby-transformer-json",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      }
    },
  ],
};
