import React from "react";
import cheapshark from "./cs_logo.png";

import Linkedin from "./linkedinLogo-removebg-preview.png";
import Twitter from "./twitter_logo-removebg-preview (1).png";
import instagram from "./insta_logo-removebg-preview.png";
import Github from "./Github_logo-removebg-preview.png";

export default function About() {
  return (
    <div
      className="container"
      style={{ textAlign: "center", alignContent: "center" }}
    >
      <h1
        className="d-flex justify-content-center"
        style={{ color: "#1b1a17" }}
      >
        <i>About :</i>
      </h1>

      <div className="container d-flex flex-column justify-content-center align-items-center">
        <h2 style={{ color: "#FF8303" }}>
          CheapUp is a web application that helps people find the best game
          deals at online platforms.
        </h2>
        <h2 style={{ color: "#FF8303" }}>
          Want to have fun and save some money? CheapUp is the way!!
        </h2>
        <br />
        <div className="d-flex flex-column align-items-center">
          <h1 style={{ color: "#1b1a17" }}>
            <i>Tools :</i>
          </h1>
          <h2 style={{ color: "#FF8303" }}>
            CheapUp was made using React.js and an external API as a class
            exercise.
          </h2>
          <h2 style={{ color: "#FF8303", paddingBottom: "20px" }}>
            We used the CheapShark API,
          </h2>
          <a
            target="_blank"
            className="navbar-brand d-flex justify-content-center"
            href="https://apidocs.cheapshark.com/"
          >
            <img
              src={cheapshark}
              width="200"
              height="200"
              className="d-inline-block align-top"
              alt="logo cheap shark"
            />
          </a>
          <br />
          <br />
          <br />
        </div>

        <h1 style={{ color: "#1b1a17" }}>
          <i>Creators :</i>
        </h1>
        <br />
        <div className="d-flex">
          <div style={{ paddingRight: "280px" }}>
            <h3>Felipe Borges</h3>
            <div className="d-flex align-items-center">
              <a
                target="_blank"
                className="navbar-brand"
                href="https://github.com/FelipeBorges1991"
              >
                <img
                  src={Github}
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                  alt="logo img"
                />
              </a>

              <a
                target="_blank"
                className="navbar-brand"
                href="https://www.instagram.com/felipedecborges/"
              >
                <img
                  src={instagram}
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                  alt="logo img"
                />
              </a>

              <a
                target="_blank"
                className="navbar-brand"
                href="https://www.linkedin.com/in/felipe-borges-413356150/"
              >
                <img
                  src={Linkedin}
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                  alt="logo img"
                />
              </a>

              <a
                target="_blank"
                className="navbar-brand"
                href="https://twitter.com/Fcborges18"
              >
                <img
                  src={Twitter}
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                  alt="logo img"
                />
              </a>
            </div>
          </div>

          <div className="d-flex flex-column align-items-center">
            <h3>Jean Garcia</h3>
            <div>
              <a
                target="_blank"
                className="navbar-brand"
                href="https://github.com/jeanclg"
              >
                <img
                  src={Github}
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                  alt="logo img"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
