import React from "react"
import { graphql } from "gatsby"
import LayoutSinglePost from "./layout-singlepost"
// === REPLACE LAYOUT WITH ONE FOR POSTS ===
// import Image from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'
import SEO from "./seo"
import Header from "./header"

export default ({ data }) => {
  const post = data.markdownRemark
  let featuredImageFluid = post.frontmatter.featured_image.childImageSharp.fluid
  var lastModIntro, lastModText /* null unless there's a lastmod */
  if (post.frontmatter.lastmod) {
    lastModIntro = "last modified:";
    lastModText = post.frontmatter.lastmod;
  }
  return (
    <>
    <SEO title = {post.frontmatter.title} />
    <Header />
    <LayoutSinglePost>
      <BackgroundImage
        fluid={featuredImageFluid} 
        className="background-hero-div" 
        alt={post.frontmatter.featured_image_alt}
      >
        <div className="background-hero-title-block">
          <h1 className="background-hero-title-text">{post.frontmatter.title}</h1>
          <h2 className="background-hero-subtitle-text"><em>{post.frontmatter.subtitle}</em></h2>
          <p className="background-hero-description-text">{post.frontmatter.description}</p>
          <p className="background-hero-p-text">
            <span style={{ fontVariant: "small-caps" }}>published:</span>&nbsp; <strong>{post.frontmatter.date}</strong><br />
            <span className="pokey">
            <span style={{ fontVariant: "small-caps" }}>{lastModIntro}</span>&nbsp; {lastModText}
            </span>
          </p>
        </div>
        </BackgroundImage>
        <p className="featured-image-caption">{post.frontmatter.featured_image_caption}</p>
        <div className="post-line"></div>
        <div className="container-narrower">
          <article className="article" dangerouslySetInnerHTML={{ __html: post.html }}>
          </article>
        </div>
    </LayoutSinglePost>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug, ne: "Home page" } }) {
      frontmatter {
        description
        title
        subtitle
        date(formatString: "MMMM D, YYYY")
        lastmod(formatString: "MMMM D, YYYY")
        featured_image {
          childImageSharp {
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        featured_image_alt
        featured_image_caption
        discussionId
      }
      html
    }
  }
`