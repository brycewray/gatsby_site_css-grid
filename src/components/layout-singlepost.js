/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import SinglePostFooter from "./singlepost-footer"
import Footer from "./footer"
import "../assets/scss/ofotigrid.scss"

const LayoutSinglePost = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery2 {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <SinglePostFooter />
      <Footer />
    </>
  )
}

LayoutSinglePost.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutSinglePost
