import { Link, Img } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header>
  <p className="site-logo"><span className="site-logo-holder"><Link to="/"><img src="/images/BW_avatar_36x36_xpar.png" alt="This site's logo; click here to go to the home page" /></Link></span>&nbsp;&nbsp;&nbsp;<Link to="/">BryceWray.com</Link></p>
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
        <Link to="/about" title="About">About</Link>
      </li>
      <li className="nav__item">
        <Link to="/posts" title="Posts">Posts</Link>
      </li>
    </ul>
  </nav>
</header>
)

export default Header
