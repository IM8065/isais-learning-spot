module.exports = {
  siteMetadata: {
    title: `Isai's Learning Spot`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `ywqtl53z`,
        dataset: `production`,
      },
    },
  ],
};
