import React from 'react'
import { Link, graphql } from 'gatsby'
import SEO from './seo'
import Layout from './layout'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages - 1 // incremented down by 1
    const prevPage = currentPage - 1 === 1 ? '/posts/' : `posts/${(currentPage - 1).toString()}`
    const nextPage = `posts/${(currentPage + 1).toString()}`

    return (
      <Layout location={this.props.location}>
        <SEO
          title="Posts"
        />
        <h1 className="ctr topOfMain">Posts</h1>
        <div className="container">
          <div className="post-line"></div>
          <div className="container-narrower">
            <ul className="postlistNav ctr">
              {isFirst && (
                <>
                ← Prev
                </>
              )}
              {!isFirst && (
                <Link to={prevPage} rel="prev">
                  ← Prev
                </Link>
              )}
              {Array.from({ length: (numPages) }, (_, i) => (
                <li
                  key={`pagination-number${i + 1}`}
                  style={{
                    margin: 0,
                  }}
                >
                  <Link
                    to={`/posts/${i === 0 ? '' : i + 1}`}
                  >
                    {i + 1}
                  </Link>
                </li>
              ))}
              {isLast && (
                <>
                Next →
                </>
              )}
              {!isLast && (
                <Link to={nextPage} rel="next">
                  Next →
                </Link>
              )}
            </ul>
            <hr style={{ marginTop: "0", marginBottom: "0.5em" }} />
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <>
                    <h2 className="h5" style={{ marginBottom: "0.25em" }}>
                      <Link to={node.fields.slug}>
                        {node.frontmatter.title}
                      </Link><br />
                    <span className="legal"><em>{node.frontmatter.subtitle}</em></span></h2>
                    <p className="pokey text-muted" style={{ marginTop: "0" }}>
                    <time datetime={node.frontmatter.date} className="pokey text-muted text-sans-serif">Published: {node.frontmatter.date}
                    {node.frontmatter.lastmod && (
                      <>
                      <br />Last modified: {node.frontmatter.lastmod}
                      </>
                    )}
                    </time>
                    </p>
                    <p className="pokey text-body" style={{ marginTop: "0.5em", marginBottom: "2em" }}>{node.frontmatter.description}</p>
                </>
              )
            })}
            <hr style={{ marginTop: "2em" }} />
            <ul className="postlistNav ctr">
              {isFirst && (
                <>
                ← Prev
                </>
              )}
              {!isFirst && (
                <Link to={prevPage} rel="prev">
                  ← Prev
                </Link>
              )}
              {Array.from({ length: (numPages) }, (_, i) => ( 
                <li
                  key={`pagination-number${i + 1}`}
                  style={{
                    margin: 0,
                  }}
                >
                  <Link
                    to={`/posts/${i === 0 ? '' : i + 1}`}
                  >
                    {i + 1}
                  </Link>
                </li>
              ))}
              {isLast && (
                <>
                Next →
                </>
              )}
              {!isLast && (
                <Link to={nextPage} rel="next">
                  Next →
                </Link>
              )}
            </ul>
          </div>
        </div>
     </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: { frontmatter: {tags: {eq: "post"}} }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            lastmod(formatString: "MMMM D, YYYY")
            title
            subtitle
            description
          }
        }
      }
    }
  }
`