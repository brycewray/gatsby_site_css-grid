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
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/posts/' : `posts/${(currentPage - 1).toString()}`
    const nextPage = `posts/${(currentPage + 1).toString()}`

    return (
      <Layout location={this.props.location}>
        <SEO
          title="Posts"
        />
        <h1 className="ctr topOfMain">Posts</h1>
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
          {Array.from({ length: numPages }, (_, i) => (
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
        <hr />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug} className="container">
              <div className="post-line"></div>
              <div className="container-narrower">
                <h2 className="h5" style={{ marginBottom: "0" }}>
                  <Link to={node.fields.slug}>
                    {node.frontmatter.title}
                  </Link>
                </h2>
                <p>{node.frontmatter.subtitle}</p>
                <time datetime={node.frontmatter.date} className="pokey text-muted text-sans-serif">Published: {node.frontmatter.date}
                {node.frontmatter.lastmod && (
                  <>
                  <br />Last modified: {node.frontmatter.lastmod}
                  </>
                )}
                </time>
                <p className="pokey text-body">{node.frontmatter.description}</p>
              </div>
            </div>
          )
        })}
        <hr />
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
          {Array.from({ length: numPages }, (_, i) => (
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