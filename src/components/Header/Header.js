import React from 'react';
import './Header.css'

function Header() {
  return (
    <header>
      <nav>
        <h2 class="logo">
          <a href="#">My Little<span> Website</span></a>
        </h2>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Skills</a></li>
        </ul>
        <button type="button">Contact Me</button>
      </nav>
    </header>
  )
}

export default Header