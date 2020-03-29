import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "./footer"
import SEO from "./seo"

const AboutLayout = ({ children }) => {
  return (
    <>
      <SEO />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

AboutLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AboutLayout
