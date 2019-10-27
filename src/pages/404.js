import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 className="ctr">Page not found</h1>
    <div className="post-line"></div>
    <p className="ctr">Sorry, that page isn&rsquo;t on this site.</p>
    <p className="ctr" style={{ marginBottom: "10em" }}>Please use the navigation menu, above, to find another&nbsp;page.</p>
  </Layout>
)

export default NotFoundPage
