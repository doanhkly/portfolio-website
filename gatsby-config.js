/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const dotenv = require('dotenv')

if (process.env.NODE_ENV !== 'production')  {
  dotenv.config() 
}

module.exports = {
  // siteMetadata
  
  siteMetadata: {
    title: `Doanh Ly | Future Software Engineer`,
    siteUrl: `https://doanhkly.netlify.com`,
    description: `Just an individual fascinated by the possibilities and changes you can 
        make with just a few lines of code. Also, it's fun!`,
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
