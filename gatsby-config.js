require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
}

module.exports = {
  siteMetadata: {
    title: "Patrick's Site",
    logo: "",
    url: "https://www.patrickreynolds.me",
    description: "A corner of the interwebs where I share my thoughts around design, engineering, and building products.",
    author: "@patrickreynolds",
    userName: "Patrick Reynolds",
    userEmail: "patrickscottreynolds@gmail.com",
    userTwitter: "",
    userLocation: "San Francisco, CA",
  },
  plugins: [

    // Manage document head data with react-helmet. Provides drop-in server rendering support for Gatsby.
    // https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet
    `gatsby-plugin-react-helmet`,

    // Gatsby plugin which parses files within a directory for further parsing by other plugins
    // https://www.gatsbyjs.org/packages/gatsby-source-filesystem
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },

    // Gatsby transformer plugin for images using Sharp
    // https://www.gatsbyjs.org/packages/gatsby-transformer-sharp
    `gatsby-transformer-sharp`,

    // Wrapper of the Sharp image manipulation library for Gatsby plugins
    // https://www.gatsbyjs.org/packages/gatsby-plugin-sharp
    `gatsby-plugin-sharp`,


    // Gatsby plugin which adds a manifest.webmanifest to make sites progressive web apps
    // https://www.gatsbyjs.org/packages/gatsby-plugin-manifest
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Patrick Reynolds' Site`,
        short_name: `Patrick's Site`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },


    // Gatsby plugin which sets up a site to be able to run offline
    // https://www.gatsbyjs.org/packages/gatsby-plugin-offline
    `gatsby-plugin-offline`,


    // Gatsby plugin to add support for styled components
    // https://www.gatsbyjs.org/packages/gatsby-plugin-styled-components
    `gatsby-plugin-styled-components`,


    // Gatsby plugin to setup server rendering of Typography.js' CSS
    // https://www.gatsbyjs.org/packages/gatsby-plugin-typography
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },


    // Adds TypeScript support to Gatsby
    // https://www.gatsbyjs.org/packages/gatsby-plugin-typescript
    `gatsby-plugin-typescript`,


    // Gatsby source plugin for building websites using the Contentful CMS as a data source
    // https://www.gatsbyjs.org/packages/gatsby-source-contentful
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },


    // Gatsby transformer plugin for Markdown using the Remark library and ecosystem
    // https://www.gatsbyjs.org/packages/gatsby-transformer-remark
    `gatsby-transformer-remark`,


    // 
    // 
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       `poppins`,
    //     ],
    //     display: 'swap'
    //   }
    // }


    // A Gatsby plugin to download and prefetch Google Fonts. Can increase performance as opposed to loading webfonts from Google's external stylesheet.
    // https://www.gatsbyjs.org/packages/gatsby-plugin-prefetch-google-fonts
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`]
          },
        ],
      },
    },

    // Gatsby plugin to add google analytics onto a site
    // https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: `${process.env.GOOGLE_ANALYTICS_TRACKING_ID}`,
        head: true,
      }
    },

  ],
}
