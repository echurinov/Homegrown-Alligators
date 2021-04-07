import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "./Images/logo.png";
import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 0x;
  letter-spacing: 2px;
  font-weight: bold;
  color: white;
  font-size: 1rem;
  font: Helvetica;
  height: 5.5rem;
  width: 100%;
  outline: none;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: ease background-color 250ms;
  &:hover {
    background-color: rgb(0, 0, 0, 0.1);
    border-bottom: 2px solid rgb(160, 98, 59);
  }
`;

function NavBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  return (
    <nav className="navbar">
      {/*This part represents the club logo*/}
      <div className="navbar-section1">
        <Link to="/" className="navbar-logo-area">
          <img className="navbar-logo" src={logo} alt="" />
          <h4>SSDC</h4>
        </Link>
      </div>
      {/*This part represents the links to the other pages*/}
      {/*Right below represents the icon appears when the screen gets small enough*/}
      <div className="navbar-menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <div className="navbar-section2">
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/about">
              <Button>About Us</Button>
            </Link>
          </li>

          <li className="navbar-item">
            <Link to="/members">
              <Button>Our Members</Button>
            </Link>
          </li>

          <li className="navbar-item">
            <Link to="/projects">
              <Button>Projects</Button>
            </Link>
          </li>

          <li className="navbar-item">
            <Link to="/contact">
              <Button>Contact Us</Button>
            </Link>
          </li>

          <li className="navbar-item">
            <Link to="/calendar">
              <Button>Calendar</Button>
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}

export default NavBar;