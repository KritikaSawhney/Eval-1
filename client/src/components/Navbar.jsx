import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/images/real-logo-cryptowatch.png';
import './styles/styles.css'

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" id="logo" />
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} className="text-light" />
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse bg-body-dark" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto" id="navLinks">
            {/* Home */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle fw-semibold link-light"
                to="/"
                id="navbarDropdown1"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Home
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <li><Link className="dropdown-item" to="/">Home</Link></li>
                <li><Link className="dropdown-item" to="/">Pricing</Link></li>
              </ul>
            </li>

            {/* About */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle fw-semibold link-light"
                to="/About"
                id="navbarDropdown2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                <li><Link className="dropdown-item" to="/About">About us</Link></li>
                <li><Link className="dropdown-item" to="/Learn">FAQ</Link></li>
                <li><Link className="dropdown-item" to="/Feature">Features</Link></li>
                <li><Link className="dropdown-item" to="/">Terms and Conditions</Link></li>
              </ul>
            </li>

            {/* Markets */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle fw-semibold link-light"
                to="/Market"
                id="navbarDropdown3"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Markets
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown3">
                <li><Link className="dropdown-item" to="/market">Market</Link></li>
                <li><Link className="dropdown-item" to="/CryptoConvertor">Crypto Converter</Link></li>
              </ul>
            </li>

            {/* News */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle fw-semibold link-light"
                to="/"
                id="navbarDropdown4"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                News
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown4">
                <li><Link className="dropdown-item" to="/News">News</Link></li>
                <li><Link className="dropdown-item" to="/Newsletter">Newsletter</Link></li>
              </ul>
            </li>


            {/* Contact */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle fw-semibold link-light"
                to="/"
                id="navbarDropdown5"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Contact
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown5">
                <li><Link className="dropdown-item" to="/">Contact Us</Link></li>
                <li><Link className="dropdown-item" to="/Feedback">Feedback</Link></li>
                <li><Link className="dropdown-item" to="Signup">Sign Up</Link></li>
                <li><Link className="dropdown-item" to="Signin">Sign In</Link></li>
              </ul>
            </li>
          </ul>

          {/* Social Media Links */}
          <div className="navProfile d-flex ms-2">
            <ul className="navbar-nav gap-1">
              <li className="nav-item">
                <button className="btn btn-outline-dark fw-bold">
                  <Link to="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></Link>
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-dark fw-bold">
                  <Link to="https://www.twitter.com/"><FontAwesomeIcon icon={faTwitter} /></Link>
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-dark fw-bold">
                  <Link to="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></Link>
                </button>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-dark fw-bold">
                  <Link to="signup.html"><FontAwesomeIcon icon={faUser} /></Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
