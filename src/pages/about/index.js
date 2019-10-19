import React from "react"
import { graphql } from "gatsby"
import AboutLayout from "../../components/layout-about"
import SEO from "../../components/seo"
import BackgroundImage from "gatsby-background-image"

export default ({ data }) => {
  const About = data.markdownRemark
  let featuredImageFluid = About.frontmatter.featured_image.childImageSharp.fluid
  return (
    <AboutLayout>
      <SEO title="About" />
      <BackgroundImage 
        fluid={featuredImageFluid} 
        className="background-hero-div" 
        alt={About.frontmatter.featured_image_alt}
      >
        <div className="background-hero-title-block">
          <h1 className="background-hero-title-text">{About.frontmatter.title}</h1>
          <h2 className="background-hero-subtitle-text"><em>{About.frontmatter.subtitle}</em></h2>
          <p className="background-hero-description-text">{About.frontmatter.description}</p>
          <p className="background-hero-p-text">
            <span style={{ fontVariant: "small-caps" }}>published:</span>&nbsp; <strong>{About.frontmatter.date}</strong><br />
            <span className="pokey">
            <span style={{ fontVariant: "small-caps" }}>last modified:</span>&nbsp; {About.frontmatter.lastmod}
            </span>
          </p>
        </div>
      </BackgroundImage>
      <p className="featured-image-caption">{About.frontmatter.featured_image_caption}</p>
        <div className="post-line"></div>
        <div className="container-narrower">
          <article className="article" dangerouslySetInnerHTML={{ __html: About.html }}>
          </article>
        </div>
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
        featured_image_alt
        featured_image_caption
        description
        title
        tags
        subtitle
        date(formatString: "MMMM D, YYYY")
        lastmod(formatString: "MMMM D, YYYY")
        discussionId
      }
    }
  }
`