import React from "react";
import { StaticQuery, graphql } from "gatsby";

const PostsHomeList = () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(filter: {frontmatter: {tags: {eq: "post"}}}, sort: {fields: frontmatter___date, order: DESC}) {
          edges {
            node {
              frontmatter {
                title
                date(formatString: "MMMM D, YYYY")
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
        {data.allMarkdownRemark.edges.map(({ node }) =>(
          <div>
            <h2 className="h5" style={{ marginBottom: "0" }}><a href={ node.fields.slug}>{node.frontmatter.title}</a></h2>
            <time datetime={node.frontmatter.date} className="pokey text-muted text-sans-serif">{node.frontmatter.date}</time>
            <p className="pokey text-body">{node.frontmatter.description}</p>
          </div>
        ))}
      </div>
    }
  />
);

export default PostsHomeList