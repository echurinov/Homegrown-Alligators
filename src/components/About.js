import React from "react";
import Footer from "./footer";
import PageTitle from "./pageTitle";
import gatorLogo from "./Images/Gators Logo.png";
import calendar from "./Images/calendar.png"
import "./About.css";

function About() {
  return (
    
    <div className="scroll">

      <div>
        <PageTitle text="ABOUT US"/>
      </div>
      
      
      <div className="about-body">
        <img className="about-image" src={gatorLogo} alt=""/>
        <p className="about-description">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
         pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
         deserunt mollit anim id est laborum."
        </p>
      </div>

      <div>
        <PageTitle text="CALENDAR"/>
      </div>
      

      <img className="calendar-temp-image" src={calendar} alt=""/>

      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default About;
