import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Social.css";
import facebook from "./Images/facebook.png";
import instagram from "./Images/instagram.png";
import logo from "./Images/logo.png";

function Social() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  return (
    <nav className="social">
      <div classname="social-container">
        {/*The following part represents the top of the header, which has a blue background and contains all the social media links*/}
        <ul className="social-link">
          <a href="https://www.facebook.com/groups/ufssdc/?ref=share">
            <img className="social-icon" src={facebook} />
          </a>
          <a href="https://www.instagram.com/ufssdc/">
            <img className="social-icon" src={instagram} />
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default Social;