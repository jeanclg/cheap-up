import React from "react";

import ironhack from "./ironhack-logo.png";
import Github from "./Github_logo-removebg-preview.png";

export default function Footer() {
  return (
    <footer
      className="navbar navbar-static-bottom navbar-light"
      style={{ backgroundColor: "#1b1a17" }}
    >
      <div className="d-flex flex-column align-content-start align-items-center">
        <h4 style={{ color: "#F0E3CA" }}>Contact us:</h4>
        <div className="d-flex align-items-center">
          <a
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
          <h6 style={{ color: "#FF8303" }}>Felipe Borges</h6>
        </div>

        <div className="d-flex align-items-center">
          <a className="navbar-brand" href="https://github.com/jeanclg">
            <img
              src={Github}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="logo Github"
            />
          </a>
          <h6 style={{ color: "#FF8303", paddingRight: "15px" }}>
            Jean Garcia
          </h6>
        </div>
      </div>

      <div className="d-flex flex-column align-content-end">
        <div className="d-flex flex-column">
          <h6 style={{ color: "#FF8303" }} className="text-center container">
            Created as a FrontEnd project at Ironhack's Bootcamp campus São
            Paulo in April/2021.
          </h6>

          <h6 style={{ color: "#FF8303" }} className="text-center container">
            Using APIs integrations, React JavaScript, Bootstrap and other
            libraries.
          </h6>
        </div>

        <a
          className="navbar-brand d-flex justify-content-center"
          href="https://www.ironhack.com/br/sao-paulo"
        >
          <img
            src={ironhack}
            width="90"
            height="90"
            className="d-inline-block align-top"
            alt="logo Ironhack"
          />
        </a>
      </div>
    </footer>
  );
}
