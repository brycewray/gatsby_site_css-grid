import React from "react"
import { graphql } from "gatsby"
import AboutLayout from "../../components/layout-about"
import SEO from "../../components/seo"
import BackgroundImage from "gatsby-background-image"

export default ({ data }) => {
  const About = data.markdownRemark
  let featuredImageFluid = About.frontmatter.featured_image.childImageSharp.fluid
  var lastModIntro, lastModText /* null unless there's a lastmod */
  if (About.frontmatter.lastmod) {
    lastModIntro = "last modified:";
    lastModText = About.frontmatter.lastmod;
  }
  return (
    <AboutLayout>
      <SEO
        title="About" 
        description={About.frontmatter.description}
        image={About.frontmatter.featured_image.childImageSharp.resize.src}
      />
      <BackgroundImage
        fluid={featuredImageFluid} 
        className="background-hero-div" 
        alt={About.frontmatter.featured_image_alt}
      >
        <div className="background-hero-title-block-fit">
          <div class="background-hero-title-text">
            <h1 className="text-center text-4xl md:text-left md:text-5xl lg:text-6xl xb:text-8xl tracking-tight leading-tight mb-6 px-4 md:px-0 text-white">{About.frontmatter.title}</h1>
            <h2 class="italic text-center text-2xl md:text-left md:text-3xl lg:text-5xl xb:text-6xl leading-tight tracking-tight px-6 md:px-0 text-white">
              {About.frontmatter.subtitle && (
                <em>{About.frontmatter.subtitle}</em>
              )}
              {!About.frontmatter.subtitle && (
                <>
                &nbsp;
                </>
              )}
            </h2>
            <p className="hidden not-italic md:block md:text-2xl xb:text-4xl tracking-tight md:text-base md:mt-8 mb-6 text-white">{About.frontmatter.description}</p>
            <p className="text-base xb:text-lg text-center px-4 md:text-right md:px-0 mt-4 md:mt-0 mb-0 text-white">
              <span style={{ fontVariant: "small-caps" }}>published:</span>&nbsp; <strong>{About.frontmatter.date}</strong><br />
              <span className="text-sm">
                <span style={{ fontVariant: "small-caps" }}>{lastModIntro}</span>&nbsp; {lastModText}
              </span>
            </p>
            <p className="text-center text-white text-xs mt-4 mb-0 md:mb-1 pb-1">
              {About.frontmatter.featured_image_caption && (
                About.frontmatter.featured_image_caption
              )}
              {!About.frontmatter.featured_image_caption && (
                <>
                &nbsp;
                </>
              )}
            </p>
          </div>
        </div>
      </BackgroundImage>
        <div className="sm:w-5/6 md:w-4/5 xl:w-1/2 xb:w-5/12 mt-10 mr-auto ml-auto px-6 lg:px-16">
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
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
            }
            resize(width: 1280) {
              src
              width
              height
              aspectRatio
              originalName
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