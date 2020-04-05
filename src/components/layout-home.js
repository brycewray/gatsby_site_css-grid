import React from "react"
import PropTypes from "prop-types"
import { Link } from 'gatsby'
import Footer from "./footer"
import SEO from "./seo"
import PostsListHome from "./postslist-home"

const HomeLayout = ({ children }) => {
  return (
    <>
      <SEO title="Home" />

      <div className="container-home">
        <div className="column-home-1">
          {children}
        </div>
        <div className="column-home-2">
          <h2 className="h1" style={{ marginBottom: "0.5em" }}>
            <Link to="/posts">Posts</Link>
          </h2>
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
