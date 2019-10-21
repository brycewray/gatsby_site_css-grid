import React from 'react'
//import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import SEO from "./seo"
import Layout from './layout'

export const postsQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    posts: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

const postsList = (props) => {

  return (
    <Layout>
    <SEO title="Posts" />
      <div className="container">
        <h1 className="ctr topOfMain">Posts</h1>
        <div className="post-line"></div>
        <div className="container-narrower">
          {props.data.posts.edges.map(({ node }) => (
            <div key={node.id}>
              <h2 className="h5" style={{ marginBottom: "0" }}><Link to={node.fields.slug}>{node.frontmatter.title}</Link></h2>
              <time datetime={node.frontmatter.date} className="pokey text-muted text-sans-serif">{node.frontmatter.date}</time>
              <p className="pokey text-body">{node.frontmatter.description}</p>
            </div>
          ))}
        </div>
        <div className="ctr">
          {props.pageContext.previousPagePath ? <Link to={props.pageContext.previousPagePath}>Previous</Link> : null}
          {props.pageContext.nextPagePath ? <Link to={props.pageContext.nextPagePath}>Next</Link> : null}
        </div>
      </div>
    </Layout>
  );
}

export default postsList
