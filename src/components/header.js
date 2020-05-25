import React from "react"
import SvgNavIcon from "../assets/svg/svgNavIcon.svg"

const Header = () => (
  <header className="h-12 bg-blue-700 w-full fixed p-0 mt-0 z-50">
  <p className="text-white font-bold mt-2 pt-1 text-lg ml-4 md:ml-8 lg:ml-10 xb:ml-16 w-full"><span className="site-logo-holder"><a href="/" className="text-white no-underline border-b-0 active:text-gray-400 hover:text-gray-400" aria-label="This site's “BW” logo"><SvgNavIcon /></a></span>&nbsp;&nbsp;<a href="/" className="text-white active:text-gray-400 hover:text-gray-400">BryceWray.com</a></p>
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
