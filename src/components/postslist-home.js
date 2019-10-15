import React from "react"
import { StaticQuery, graphql } from "gatsby"

export default () => (
  <StaticQuery
    query={graphql`
      query PostsListHome {
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
        }
      }
    `}
    render={data => (
      <h2 className="h5">{data.allFile.edges.node.name}</h2>
    )}
  />
)