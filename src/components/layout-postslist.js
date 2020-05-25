import React from "react"
import SEO from "./seo"
import Layout from "../components/layout"

const LayoutPostsList = ({ pageContext }) => {
  return (
    <>
      <Layout>
        <SEO title = "Posts" />
        <main className="py-16">
          <div className="px-10 w-full md:w-2/3 lg:w-1/2 mx-auto">
            <h1 className="text-center tracking-tight">Posts</h1>
            <div className="post-line"></div>
            <div>
              {prevPath}
            </div>
          </div>
        </main>
      </Layout>
    </>
  )
}

export default LayoutPostsList
