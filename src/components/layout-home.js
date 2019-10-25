/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import Footer from "./footer"
import "../assets/scss/ofotigrid.scss"
import SEO from "./seo"
import PostsListHome from "./postslist-home"

const HomeLayout = ({ children }) => {
  return (
    <>
      <SEO title="Home" />

      <div className="container-home">
        <div className="column-home">
          {children}
        </div>
        <div className="column-home">
          <h2 className="h1" style={{ marginBottom: "0.5em" }}>Latest posts</h2>
            <PostsListHome />
          <p className="text-sans-serif"><a href="/posts"><strong>All posts</strong></a></p>
          <h3 className="h5 twitter-border">Tweets by&nbsp;<a href="https://twitter.com/BryceWrayTX" target="_blank" rel="noopener noreferrer">@BryceWrayTX</a></h3>
          <p className="teeny"><strong>Note</strong>: Some retweets with added comments won&rsquo;t show the original&nbsp;tweets unless you click or tap on&nbsp;them.</p>
          <a className="twitter-timeline" data-chrome="noheader transparent" data-tweet-limit="3" data-dnt="true" data-border-color="#656565" href="https://twitter.com/BryceWrayTX?ref_src=twsrc%5Etfw">Tweets by BryceWrayTX</a>
        </div>
      </div>
      <Footer />
    </>
  )
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomeLayout
