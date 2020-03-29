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
                date(formatString: "MMMM D,YYYY")
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
            <p><strong><em>{node.frontmatter.subtitle}</em></strong></p>
            <time datetime={node.frontmatter.date} className="pokey text-muted text-sans-serif">{node.frontmatter.date}
                {node.frontmatter.lastmod && (
                  <>
                  &nbsp;&bull;&nbsp;Last modified {node.frontmatter.lastmod}
                  </>
                )}
                </time>
            <p className="pokey text-body">{node.frontmatter.description}</p>
          </div>
        ))}
        <p><Link to= "/posts"><strong>All {data.wholeThing.pageInfo.itemCount} posts</strong></Link> <span className="pokey"><em>(listed five per page)</em></span></p>
      </div>
    }
  />
);

export default PostsHomeList