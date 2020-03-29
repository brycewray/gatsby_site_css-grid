import React from "react"
import { graphql } from "gatsby"
import HomeLayout from "../components/layout-home"
import Header from "../components/header"
import BackgroundImage from 'gatsby-background-image'

export default ({ data }) => {
  const HomePage = data.markdownRemark
  return (
    <>
    <Header />
    <BackgroundImage 
    fluid={HomePage.frontmatter.featured_image.childImageSharp.fluid}
    className="background-hero-div"
    alt={HomePage.frontmatter.featured_image_alt}
    >
      <div style={{ height: "40vh" }}></div>
    </BackgroundImage>
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