import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"

const PostsHomeList = () => (
  <StaticQuery
    query={graphql`
      query {
        wholeThing: allMarkdownRemark(filter: {frontmatter: {tags: {eq: "post"}}}) {
          pageInfo {
            itemCount
          }
        }
        onlySeven: allMarkdownRemark(filter: {frontmatter: {tags: {eq: "post"}}}, limit: 7, sort: {fields: frontmatter___date, order: DESC}) {
          edges {
            node {
              frontmatter {
                title
                subtitle
                date(formatString: "MMMM D, YYYY")
                lastmod(formatString: "MMMM D, YYYY")
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
    render={data => 
      <div>
        {data.onlySeven.edges.map(({ node }) =>(
          <div>
            <h2 className="h4 not-italic tracking-tight"><Link to={ node.fields.slug}>{node.frontmatter.title}</Link></h2>
            <p className="font-bold text-base mt-2 mb-0 leading-5">{node.frontmatter.subtitle}</p>
            <p className="text-xs tracking-normal mt-0 mb-1">
              {node.frontmatter.date}
                {node.frontmatter.lastmod && (
                  <>
                  &nbsp;&nbsp;&bull;&nbsp;&nbsp;Last modified {node.frontmatter.lastmod}
                  </>
                )}
            </p>
            <p className="text-sm mt-2 mb-3">{node.frontmatter.description}</p>
          </div>
        ))}
        <p><Link to= "/posts"><strong>All {data.wholeThing.pageInfo.itemCount} posts</strong></Link> <span className="pokey"><em>(listed five per page)</em></span></p>
      </div>
    }
  />
)

export default PostsHomeList