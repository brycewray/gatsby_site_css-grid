import React from "react"
import PropTypes from "prop-types"
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
