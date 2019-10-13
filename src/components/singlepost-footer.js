// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import TalkyardCommentsIframe from '@debiki/gatsby-plugin-talkyard'

const SinglePostFooter = () => (
  <>
  <div className="container container-comments">
    <TalkyardCommentsIframe />
  </div>
  <div className="bg-dark">
    <h3 className="ctr wht"><a href="/posts" style={{ borderBottom: "0" }}>Other posts</a></h3>
    <p className="ctr">
      <strong>Next</strong>: 
      [Next indication here]
    </p>
    <p className="ctr">
      <strong>Previous</strong>: 
      [Previous indication here]
    </p>
  </div>
  </>
)

export default SinglePostFooter
