import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

export default ({ data }) => {
  return (
    <>
    <Layout>
    <SEO title = "Posts" />
      <div className="container">
        <h1 className="ctr topOfMain">Posts</h1>
        <div className="post-line"></div>
        <div className="container-narrower">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <h2 className="h5" style={{ marginBottom: "0" }}><a href={node.fields.slug}>{node.frontmatter.title}</a></h2>
              <time datetime={node.frontmatter.date} className="pokey text-muted text-sans-serif">{node.frontmatter.date}</time>
              <p className="pokey text-body">{node.frontmatter.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
    </>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {tags: {eq: "post"}}}, sort: {fields: frontmatter___date}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`