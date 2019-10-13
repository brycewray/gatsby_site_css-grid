// import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header>
  <p className="site-logo"><a href="/">BryceWray.com</a></p>
  <input type="checkbox" id="nav-toggle" className="nav-toggle" aria-hidden="true" />
  <label for="nav-toggle" className="nav__icon" aria-hidden="true">
    Expand the menu
      <span className="nav__icon-line"></span>
      <span className="nav__icon-line"></span>
      <span className="nav__icon-line"></span>
  </label>
  <nav role="navigation" className="nav">
    <ul className="nav__items">
      <li className="nav__item">
        <a href="/about" title="About">About</a>
      </li>
      <li className="nav__item">
        <a href="/posts" title="Posts">Posts</a>
      </li>
    </ul>
  </nav>
</header>
)

export default Header
