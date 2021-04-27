import React from "react";
import cheapshark from "./cs_logo.png";

export default function About() {
  return (
    <div className="container">
      <h1
        className="d-flex justify-content-center"
        style={{ color: "#1b1a17" }}
      >
        <i>About :</i>
      </h1>

      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h4 style={{ color: "#FF8303" }}>
          CheapUp is a web application that helps people find the best game
          deals at online platforms.
        </h4>
        <h4 style={{ color: "#FF8303" }}>
          Want to have fun and save some money? CheapUp is the way!!
        </h4>
        <div className="d-flex flex-column align-items-center">
          <h1 style={{ color: "#1b1a17" }}>
            <i>Tools :</i>
          </h1>
          <h4 style={{ color: "#FF8303" }}>
            CheapUp was made using React.js and an external API as a class
            exercise.
          </h4>
          <h4 style={{ color: "#FF8303" }}>We used the CheapShark API,</h4>
          <a
            target="_blank"
            className="navbar-brand d-flex justify-content-center"
            href="https://apidocs.cheapshark.com/"
          >
            <img
              src={cheapshark}
              width="90"
              height="90"
              className="d-inline-block align-top"
              alt="logo cheap shark"
            />
          </a>
        </div>

        <div>
          <h1 style={{ color: "#1b1a17" }}>
            <i>Creators :</i>
          </h1>
        </div>
      </div>
    </div>
  );
}
