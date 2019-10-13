import React from "react"
import { graphql } from "gatsby"
import LayoutSinglePost from "./layout-singlepost"
// === REPLACE LAYOUT WITH ONE FOR POSTS ===
// import Image from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'

export default ({ data }) => {
  const post = data.markdownRemark
  let featuredImageFluid = post.frontmatter.featured_image.childImageSharp.fluid
  return (
    <LayoutSinglePost>
      <BackgroundImage
        fluid={featuredImageFluid}
      >
        <h1>{post.frontmatter.title}</h1>
        <h2><em>{post.frontmatter.subtitle}</em></h2>
        </BackgroundImage>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </LayoutSinglePost>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug, ne: "Home page" } }) {
      frontmatter {
        title
        subtitle
        date
        featured_image {
          childImageSharp {
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        discussionId
      }
      html
    }
  }
`