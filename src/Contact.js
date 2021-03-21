import { Link } from "react-router-dom";
import styled from "styled-components";
import PageTitle from "./components/pageTitle";
import Map from "./components/Images/Map.png";
import Header from "./components/header";
import Footer from "./components/footer";
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
      <div>
        <Header/>
      </div>
      <PageTitle text="CONTACT US"/>
      <div className="contact-content-contex">
        <li className="contact-content">
          <div className="contact-body">
            <ul className="contact-description">
              <li>
                <div className="content-type"> Email: </div>
                <div className="content-info">ufssdc@gmail.com</div>
              </li>
              <li>
                <div className="content-type">Zoom: </div>{" "}
                <div className="content-info">zoom.com</div>
              </li>
              <li>
                <div className="content-type">Address: </div>
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
              <Button>
                <div className="contact-button" href="https://www.google.com/forms/about/">Apply</div>
              </Button>
            </div>
          </div>
        </li>
        <li>
          <div className="contact-image">
            <img src={Map} />
          </div>
        </li>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default Contact;
