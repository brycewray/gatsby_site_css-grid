// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

const Footer = () => (
  <>
  <footer className="ctr">
    <p><a href="https://twitter.com/BryceWrayTX" target="_blank" rel="noopener noreferrer" style={{ borderBottom: 
    "none" }}><img src="/images/twitter-2430933_48x48.png" style={{ height: "24px", width: "24px" }} alt="Twitter" /></a>&nbsp;&nbsp;<a href="https://www.linkedin.com/in/brycewray" target="_blank" rel="noopener noreferrer" style={{ borderBottom: "none" }}><img src="/images/linked-in-2674741_48x48.png" style={{ height: "24px", width: "24px" }} alt="LinkedIn" /></a>&nbsp;&nbsp;<a href="/feed.xml" style={{ borderBottom: "none" }}><img src="/images/rss-2440955_48x48.png" style={{ height: "24px", width: "24px" }} alt="RSS" /></a></p>
    <p className="legaltxt">
      Copyright &copy; {new Date().getFullYear()} Bryce Wray.<br />
        Site built and managed with <a href="https://jamstack.org" target="_blank" rel="noopener noreferrer">the JAMstack</a>, <a href="https://css-tricks.com/snippets/css/complete-guide-grid/" target="_blank" rel="noopener noreferrer">CSS Grid</a>, <a href="https://www.apple.com/macos" target="_blank" rel="noopener noreferrer">macOS</a>, <a href="https://www.apple.com/ios">iOS</a>, <a href="https://daringfireball.net/projects/markdown" target="_blank" rel="noopener noreferrer">Markdown</a>, <span className="text-nowrap">time, and&nbsp;love.</span> <span className="text-nowrap">Hosted by&nbsp;<a href="https://netlify.com" target="_blank" rel="noopener noreferrer">Netlify</a></span>. <span className="text-nowrap">Comments&nbsp;served by&nbsp;<a href="https://talkyard.io" target="_blank" rel="noopener noreferrer">Talkyard</a>.</span>
      </p>
  </footer>
  <script src="../js/twitterMeta.js" charset="utf-8"></script>
  </>
)

export default Footer