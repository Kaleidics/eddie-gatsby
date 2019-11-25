module.exports = {
  siteMetadata: {
    title: "Web Developer",
    author: "Eddie Chu",
    tagline: "Eddie Chu works as a full-time software developer, but is open to new and exciting projects."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography.js"
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
        resolve: 'gatsby-transformer-remark',
        options: {
          plugins: [
            'gatsby-remark-relative-images',
            {
                resolve: 'gatsby-remark-images',
                options: {
                  quality: 90,
                  maxWidth: 750,
                  linkImagesToOriginal: false
                }
            }
          ]
        }
    }
  ]
}
