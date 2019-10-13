import React from "react"
import { graphql } from "gatsby"
import AboutLayout from "../components/layout-about"
import SEO from "../components/seo"
import BackgroundImage from "gatsby-background-image"

export default ({ data }) => {
  const About = data.markdownRemark
  let featuredImageFluid = About.frontmatter.featured_image.childImageSharp.fluid
  return (
    <AboutLayout>
      <SEO title="About" />
      <BackgroundImage fluid={featuredImageFluid}><h1 style={{ color: "white" }}>Some text here in the background</h1></BackgroundImage>
      <div dangerouslySetInnerHTML={{ __html: About.html }} />
    </AboutLayout>
  )
} 

export const query = graphql`
  query {
    markdownRemark(frontmatter: {title: {eq: "The obligatory About Me page"}}) {
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