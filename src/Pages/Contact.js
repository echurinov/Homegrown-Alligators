import React, { useState } from "react";
import styled from "styled-components";
import PageTitle from "../components/pageTitle";
import Header from "../components/header";
import Footer from "../components/footer";
import "./Contact.css";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

function Map() {
  const [selectRoom, setRoomSelected] = useState(null);

  return (
    <GoogleMap
      defaultZoom={17}
      defaultCenter={{ lat: 29.643577128424344, lng: -82.34854715201908 }}
    >
      <Marker
        key={"Meeting Room"}
        position={{
          lat: 29.643577128424344,
          lng: -82.34854715201908,
        }}
        onClick={() => {
          setRoomSelected(true);
        }}
      />
      {selectRoom && (
        <InfoWindow
          position={{
            lat: 29.643577128424344,
            lng: -82.34854715201908,
          }}
          onCloseClick={() => {
            setRoomSelected(null);
          }}
        >
          <div>Meeting Room</div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

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
      <Header />
      <PageTitle text="CONTACT US" />
      <ul className="contact-content-contex">
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
                <div
                  className="contact-button"
                  href="https://www.google.com/forms/about/"
                >
                  Apply
                </div>
              </Button>
            </div>
          </div>
        </li>
        <li>
          <div className="map">
            <WrappedMap
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDKOz1BbUalx1VZnPioYn6kpRLmidpuXdY"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        </li>
      </ul>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Contact;
