// Header.jsx
import React from 'react';
import '../css/Header.css'

const Header = () => {
  return (
    <header id="home">
      <div class="header-content">
          <h2 id="quote">Explore the colourful World</h2>
          <div class="line"></div>
          <h1>With Easy Go venture</h1>
          <a
              href="#about"
              class="ctn"
              onClick='#tours'>
            Explore More                  
          </a>
      </div>
    </header>
  );
};

export default Header;
