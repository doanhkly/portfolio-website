/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */


module.exports = {
  // siteMetadata
  /*
  siteMetadata: {
    title: `Doanh Ly | Future Software Engineer`,
    siteUrl: ``,
    description: ``,
    image: ['/images/profile-img-1.jpg','/images/profile-img-2.jpg'],
  },*/

  // plugins
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Arvo`,
            subsets: [`latin`],
            variants: [`400`, `700`]
          },
          {
            family: `Material Icons`
          },
        ],
      },
    }
  ],
}
