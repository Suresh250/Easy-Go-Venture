import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMoon,faSun,faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import '../css/NavBar.css';

const NavBar = ({ onSignUpClick }) => {
  const [user, setUser] = useState(null);

  // Check if the user is logged in when the component mounts
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Set user data if available
    }
  }, []);

  // Handle logout (remove user data from localStorage)
  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null); // Update state to reflect the logout
  };

  return (
    <nav className="navbar glass" style={{ height: '70px' }}>
      {/* Logo */}
      <div className="logo-container">
        <a href="#home" className="logo-link">
          <img className="logo" src="/img/logo.png" width="60" alt="logo" />
          <h1 className="logo">Easy Go Venture</h1>
        </a>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><a href="/" className="active cir_border">Home</a></li>
        <li><a href="#HolidaySpecial" className="cir_border">Holiday Offers</a></li>
        <li><a href="#tours" className="cir_border">Tours</a></li>
        <li><a href="#contact" className="cir_border">Contact</a></li>

        {/* Display profile icon if user is logged in */}
        {user ? (
          <li>
            <button className="cir_border" onClick={handleLogout}>
              <FontAwesomeIcon icon={faUserCircle} size="2x" />
              <div>{user.firstName}</div> {/* Display the user's first name */}
            </button>
          </li>
        ) : (
          <li>
            <button className="cir_border" onClick={onSignUpClick}>SignUp/Login</button>
          </li>
        )}

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
