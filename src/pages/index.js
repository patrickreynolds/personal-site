import React from "react"
import { graphql } from 'gatsby'
import styled from 'styled-components'

import Layout from "../layout/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import "./rotating-hourglass.css"

const ComingSoon = styled.p`
  text-align: center;
`

const TempIndexPage = () => (
  <div style={{
    display: `flex`,
    justifyContent: `center`,
    alignItems: `center`,
    height: `100vh`,
  }}>
    <ComingSoon>
      <div
        class="rotating"
      >
        <span role="img">⏳</span>
      </div>

      <br /><br />

      New site coming soon 
    </ComingSoon>
  </div>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
    <p>Still need to design this thing...</p>
  </Layout>
)

export default TempIndexPage


export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          snippet
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          content {
            childMarkdownRemark {
              id
              html
              timeToRead
              wordCount {
                words
              }
            }
          }
        }
      }
    }
  }
`