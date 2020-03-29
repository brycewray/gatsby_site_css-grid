import React from "react"
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
              {prevPath}
            </div>
          </div>
        </main>
      </Layout>
    </>
  )
}

export default LayoutPostsList
