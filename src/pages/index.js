import React from "react"
import { graphql } from "gatsby"
import HomeLayout from "../components/layout-home"
import SEO from "../components/seo"

export default ({ data }) => {
  const HomePage = data.markdownRemark
  return (
    <HomeLayout>
      <SEO title="Home" />
      <div dangerouslySetInnerHTML={{ __html: HomePage.html }} />
    </HomeLayout>
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