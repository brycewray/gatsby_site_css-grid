import React from "react"
import { StaticQuery, graphql } from "gatsby"

const PostsListHome = (data) => {
  return (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h2 className="h5" style={{ marginBottom: "0" }}><a href={node.fields.slug}>{node.frontmatter.title}</a></h2>
          <time datetime={node.frontmatter.date} className="pokey text-muted text-sans-serif">{node.frontmatter.date}</time>
          <p className="pokey text-body">{node.frontmatter.description}</p>
        </div>
      ))}
    </div>
  )
}

export default PostsListHome;

export () => (
  <StaticQuery
    query={graphql`
      query PostsListHomeQuery {
        allMarkdownRemark(limit: 2, sort: {order: DESC, fields: frontmatter___date}, filter: {frontmatter: {tags: {eq: "post"}}}) {
          edges {
            node {
              frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                description
              }
              fields {
                slug
              }
            }
          }
          totalCount
        }
      }
    `}