import React from 'react';
import logo from '/img/logo.png'
// import './NavBar.css'; // Custom styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <nav className="navbar glass" style={{ height: '70px' }}>
      <div className="logo-container">
        <a href="#home" className="logo-link">
          <img
            className="logo"
            src={logo}
            width="60"
            alt="logo"
          />
          <h1 className="logo">&nbsp;Easy Go Venture</h1>
        </a>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><a href="#home" className="active cir_border">Home</a></li>
        <li><a href="#HolidaySpecial" className="cir_border">Holiday Offers</a></li>
        {/* <li><a href="#explore" className="cir_border">Explore</a></li> */}
        <li><a href="#tours" className="cir_border">Tours</a></li>
        {/* <li><a href="#about" className="cir_border">About</a></li> */}
        <li><a href="#contact" className="cir_border">Contact</a></li>
        
        {/* Dark Mode Toggle */}
        <li>
          <div className="dark-mode-toggle">
            <input type="checkbox" className="checkbox dark" id="checkbox" />
            <label htmlFor="checkbox" className="label">
              <FontAwesomeIcon icon={faMoon} className="moon-icon" />
              <FontAwesomeIcon icon={faSun} className="sun-icon" />
              <div className="ball"></div>
            </label>
          </div>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button className="menu-btn">
        <FontAwesomeIcon icon={faBars} size="lg" />
      </button>
    </nav>
  );
};

export default NavBar;
