module.exports = {
  plugins: [
  	{
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'photos',
        path: `${__dirname}/photos`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet'
  ]
}
