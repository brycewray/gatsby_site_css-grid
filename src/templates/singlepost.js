import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"

export default ({ data }) => {
  const post = data.markdownRemark
  let featuredImageFluid = post.frontmatter.featured_image.childImageSharp.fluid
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <Image fluid={featuredImageFluid} />
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        featured_image {
          childImageSharp {
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`