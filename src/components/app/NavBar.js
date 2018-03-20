import React from 'react'
const NavBar = (props) => {
  return (
    <div className="navbar-fixed">
      <nav>
        <div class="nav-wrapper blue ">
          <a href="#" class="brand-logo">Logo</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
export default NavBar;
