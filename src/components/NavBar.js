import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "./Images/logo.png";

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  return (
    <nav className="navbar">
      {/*This part represents the club logo*/}
      <Link to="/" className="navbar-logo-area">
        <img className="navbar-logo" src={logo} />
        <h4>Space Systems Design Club</h4>
      </Link>

      {/*This part represents the links to the other pages*/}
      {/*Right below represents the icon appears when the screen gets small enough*/}
      <div className="navbar-menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>

      <ul className="navbar-menu">

        <li className="navbar-item">
          <Link to="/about">About Us</Link>
        </li>

        <li className="navbar-item">
          <Link to="/members">Our Members</Link>
        </li>

        <li className="navbar-item">
          
          <Link to="/projects">Projects</Link>
        </li>

        <li className="navbar-item">
          <Link to="/contact">Contact Us</Link>
        </li>

      </ul>
    </nav>
  );
}

export default NavBar;
