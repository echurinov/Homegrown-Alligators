import React from "react";
import "./About.css";
import gatorLogo from "./components/Images/Gators Logo.png";
import calendar from "./components/Images/calendar.png"

function About() {
  return (
    <div className="scroll">
      <h1 className="about-heading">ABOUT US</h1>
      
      <div className="about-body">
        <img className="about-image" src={gatorLogo}/>
        <p className="about-description">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
         pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
         deserunt mollit anim id est laborum."
        </p>
      </div>

      <h1 className="calendar-heading">CALENDAR</h1>

      <img className="calendar-temp-image" src={calendar}></img>
    </div>
  );
}

export default About;
