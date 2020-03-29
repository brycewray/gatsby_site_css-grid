import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";

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
            <h2 className="h5" style={{ marginBottom: "0" }}><Link to={ node.fields.slug}>{node.frontmatter.title}</Link></h2>
            <p className="h5"><em>{node.frontmatter.subtitle}</em></p>
            <p className="legal text-muted" style={{ marginTop: "0" }}>
              {node.frontmatter.date}
                {node.frontmatter.lastmod && (
                  <>
                  &nbsp;&nbsp;&bull;&nbsp;&nbsp;Last modified {node.frontmatter.lastmod}
                  </>
                )}
            </p>
            <p className="pokey text-body">{node.frontmatter.description}</p>
          </div>
        ))}
        <p><Link to= "/posts"><strong>All {data.wholeThing.pageInfo.itemCount} posts</strong></Link> <span className="pokey"><em>(listed five per page)</em></span></p>
      </div>
    }
  />
);

export default PostsHomeList