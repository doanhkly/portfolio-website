/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const dotenv = require('dotenv')

if (process.env.NODE_ENV !== 'production' ? dotenv.config() : (null))

module.exports = {
  // siteMetadata
  
  siteMetadata: {
    title: `Doanh Ly | Future Software Engineer`,
    siteUrl: `https://doanhkly.netlify.com`,
    description: `My name is Doanh Ly. I am currently working on my Master's degree in Computer Science at Northeastern University.`,
    image: ['/images/profile-img-1.jpg','/images/profile-img-2.jpg'],
  },

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
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `7gxlv8eujd9q`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
