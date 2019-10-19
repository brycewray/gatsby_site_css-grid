import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "../assets/scss/ofotigrid.scss"
import SEO from "./seo"
import Layout from "../components/layout"

const LayoutPostsList = ({ pageContext }) => {
  return (
    <>
      <Layout>
        <SEO title = "Posts" />
        <main>
          <div className="container">
            <h1 className="ctr topOfMain">Posts</h1>
            <div className="post-line"></div>
            <div className="container-narrower">
              <p>
              List will go here.
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  )
}

export default LayoutPostsList
