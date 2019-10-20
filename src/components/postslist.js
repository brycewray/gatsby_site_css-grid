import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import SEO from "./seo"
import Layout from './layout'

export default function Pages ({ pageContext, data }) {
  const { posts, page, pagesSum, prevPath, nextPath } = pageContext
  return (
    <>
    <Layout>
    <SEO title = "Posts" />
      <main>
        <div className="container">
          <h1 className="ctr topOfMain">Posts</h1>
          <div className="post-line"></div>
          <div className="container-narrower">
            {posts.allMarkdownRemark.edges.node.map(({ eachPost }) => (
              <p>{eachPost.title}</p>
            ))}
            <p>Just testing for now; will pretty it up once it works.</p>
            <p><Link to={prevPath}>Previous</Link></p>
            <p><Link to={nextPath}>Next</Link></p>
            <p>Page {page} of {pagesSum}</p>
          </div>
        </div>
      </main>
    </Layout>
    </>
  )
}

Pages.propTypes = {
  pageContext: PropTypes.object,
  data: PropTypes.object,
}
