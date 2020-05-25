import React from 'react'
import SvgFirstPageIcon from "../assets/svg/svgFirstPageIcon.svg"
import SvgPrevPageIcon from "../assets/svg/svgPrevPageIcon.svg"
import SvgNextPageIcon from "../assets/svg/svgNextPageIcon.svg"
import SvgLastPageIcon from "../assets/svg/svgLastPageIcon.svg"
import { Link, graphql } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Footer from '../components/footer'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/posts/' : `posts/${(currentPage - 1).toString()}`
    const nextPage = `posts/${(currentPage + 1).toString()}`

    const pagerThing = (
    <p className="text-center text-sm mt-2 mb-2">
      {isFirst && (
        <><SvgFirstPageIcon /><SvgFirstPageIcon />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<SvgFirstPageIcon /></>
      )}
      {!isFirst && (
        <>
        <Link className="border-transparent" aria-label="First page" to="/posts"><SvgPrevPageIcon /><SvgPrevPageIcon /></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link className="border-transparent" to={prevPage} rel="prev" aria-label="Previous page"><SvgPrevPageIcon /></Link>
        </>
      )}
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      {isLast && (
        <span className="text-muted"><SvgLastPageIcon />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<SvgLastPageIcon /><SvgLastPageIcon /></span>
      )}
      {!isLast && (
        <>
        <Link className="border-transparent" to={nextPage} rel="next" aria-label="Next page"><SvgNextPageIcon /></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link className="border-transparent" to={`/posts/${numPages}`} aria-label="Last page"><SvgNextPageIcon /><SvgNextPageIcon /></Link>
        </>
      )}
    </p>
    )

    return (
      <Layout location={this.props.location}>
        <SEO
          title="Posts"
        />
        <div className="px-10 w-full md:w-2/3 lg:w-1/2 mx-auto">
          <h1 className="text-center tracking-tight">Posts</h1>
          <div className="post-line"></div>
            {pagerThing}
            <hr className="mt-2 mb-6" />
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <>
                    <h2 className="text-xl mb-1 leading-tight tracking-tight">
                      <Link to={node.fields.slug}>
                        {node.frontmatter.title}
                      </Link><br />
                    <span className="text-base tracking-tight"><em>{node.frontmatter.subtitle}</em></span></h2>
                    <p className="text-sm dateInfo" style={{ marginTop: "0" }}>
                    <time datetime={node.frontmatter.date}>Published: {node.frontmatter.date}
                    {node.frontmatter.lastmod && (
                      <>
                      <br />Last modified: {node.frontmatter.lastmod}
                      </>
                    )}
                    </time>
                    </p>
                    <p className="text-sm mt-2 mb-10">{node.frontmatter.description}</p>
                </>
              )
            })}
            <hr class="mt-6" />
            {pagerThing}
          </div>
        <Footer />
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