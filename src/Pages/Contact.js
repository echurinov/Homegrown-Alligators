import React, { useState } from "react";
import styled from "styled-components";
import PageTitle from "../components/pageTitle";
import Header from "../components/header";
import Footer from "../components/footer";
import space4 from "../components/Images/space4.png";
import '../index.css';
import "./Contact.css";

const Button = styled.button`
  background: rgb(216, 113, 50);
  border-radius: 10px;
  letter-spacing: 2px;
  font-weight: bold;
  color: white;
  font-size: 1rem;
  font: Helvetica;
  padding: 2rem 4rem;
  outline: none;
  border: none;
  width: 100%;
  text-transform: uppercase;
  cursor: pointer;
  transition: ease background-color 250ms;
  &:hover {
    background-color: rgb(236, 151, 98);
  }
`;

function Contact() {
  return (
    <div className="contact">
      <Header />

      <div className="title-wrapper">
        <img src={space4}></img>
        <PageTitle text="CONTACT US" />
      </div>

      <ul className="contact-content-contex">
        <li className="contact-content">
          <div className="contact-body">
            <ul className="contact-description">
              <li>
                <div className="content-type"> EMAIL: </div>
                <div className="content-info">ufssdc@gmail.com</div>
              </li>
              <li>
                <div className="content-type">ZOOM: </div>{" "}
                <div className="content-info">zoom.com</div>
              </li>
              <li>
                <div className="content-type">ADDRESS: </div>
                <ul className="contact-content">
                  <li className="content-info">
                    100 Farrior Hall at 205 Fletcher Drive
                  </li>
                  <li className="content-info">P.O. Box 112015</li>
                  <li className="content-info">
                    University of Florida, Gainesville, FL 32611-2015
                  </li>
                </ul>
              </li>
            </ul>

            <div
              className="contact-description"
              style={{ border: 0, background: 0 }}
            >
              <a href="https://www.google.com/forms/about/">
                <Button className="apply-text">Apply</Button>
              </a>
            </div>
          </div>
        </li>
        <li className="contact-content">
          <iframe
            className="map"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=780&amp;height=780&amp;hl=en&amp;q=205%20Fletcher%20Drive%20Gainesville+()&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="780"
            height="780"
            frameborder="0"
          ></iframe>{" "}
          <script
            type="text/javascript"
            src="https://embedmaps.com/google-maps-authorization/script.js?id=0313eac3011105610c255d196a1b012132a12bbe"
          ></script>
        </li>
      </ul>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
