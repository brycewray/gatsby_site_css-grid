import React from "react"
import { graphql } from "gatsby"
import HomeLayout from "../components/layout-home"
import Header from "../components/header"
import Img from 'gatsby-image'

export default ({ data }) => {
  const HomePage = data.markdownRemark
  return (
    <>
    <Header />
    <div class="hero-home">
      <Img 
      fluid={HomePage.frontmatter.featured_image.childImageSharp.fluid}
      alt={HomePage.frontmatter.featured_image_alt} 
      className="imgCover"
      >
      </Img>
    </div>
    <p className="legal ctr text-muted" style={{ marginTop: "0" }}>Image: Pixabay</p>
    <HomeLayout>
      <div dangerouslySetInnerHTML={{ __html: HomePage.html }} />
    </HomeLayout>
    </>
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