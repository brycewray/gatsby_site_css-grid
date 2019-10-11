import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  const HomePage = data.markdownRemark
  return (
    <Layout>
      <SEO title="Home" />
      <p>[Need to put image div up here]</p>
      <div dangerouslySetInnerHTML={{ __html: HomePage.html }} />
    </Layout>
  )
} 

export const query = graphql`
  query {
    markdownRemark(frontmatter: {title: {eq: "Home page"}}) {
      fields {
        slug
      }
      html
      frontmatter {
        featured_image {
          childImageSharp {
            fluid {
              base64
              tracedSVG
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              originalImg
              originalName
              presentationWidth
              presentationHeight
            }
          }
        }
      }
    }
  }
`