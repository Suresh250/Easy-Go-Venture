import React from 'react';
import logo from '/img/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faBars } from '@fortawesome/free-solid-svg-icons';
import '../css/NavBar.css'

const NavBar = ({ onSignUpClick }) => {
  return (
    <nav className="navbar glass" style={{ height: '70px' }}>
      {/* Logo */}
      <div className="logo-container">
        <a href="#home" className="logo-link">
          <img className="logo" src={logo} width="60" alt="logo" />
          <h1 className="logo">&nbsp;Easy Go Venture</h1>
        </a>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><a href="/" className="active cir_border">Home</a></li>
        <li><a href="#HolidaySpecial" className="cir_border">Holiday Offers</a></li>
        <li><a href="#tours" className="cir_border">Tours</a></li>
        <li><a href="#contact" className="cir_border">Contact</a></li>
        
        {/* SignUp/Login Button */}
        <li>
          <button className="cir_border" onClick={onSignUpClick}>SignUp/Login</button>  {/* Change to button with onClick */}
        </li>

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
