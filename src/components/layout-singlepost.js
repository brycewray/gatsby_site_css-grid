/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./footer"

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
  /*
  Hidden paragraph below is only until I can determine what to do with the data query above, since Gatsby crashes with unused vars if I leave it but don't refer to "data" -- and it crashes for other reasons if I delete the query.
  */

  return (
    <>
      <p style={{ display: "none" }}>{data.site.siteMetadata.title}</p>
      <main>{children}</main>
      <p>&nbsp;</p>
      <Footer />
    </>
  )
}

LayoutSinglePost.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutSinglePost
