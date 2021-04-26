import React from "react";
import { Link } from "react-router-dom";

import ironhack from "./ironhack-logo.png";
import Github from "./Github_logo-removebg-preview.png";

export default function Footer() {
  return (
    <footer className="navbar navbar-light bg-dark">
      <div className="d-flex flex-column align-content-start align-items-center">
        <h4 className="text-white">Contact us:</h4>
        <div className="d-flex align-items-center">
          <Link className="navbar-brand" to="#">
            <img
              src={Github}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="logo img"
            />
          </Link>
          <h6 style={{ color: "#F0E3CA" }}>Felipe Borges</h6>
        </div>

        <div className="d-flex align-items-center">
          <Link className="navbar-brand" to="#">
            <img
              src={Github}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="logo Github"
            />
          </Link>
          <h6 style={{ color: "#F0E3CA", paddingRight: "15px" }}>
            Jean Garcia
          </h6>
        </div>
      </div>

      <div className="d-flex flex-column align-content-end">
        <div className="d-flex flex-column">
          <h7 style={{ color: "#F0E3CA" }} className="text-center container">
            Created as a FrontEnd project at São Paulo Ironhack's Bootcamp in
            April/2021.
          </h7>

          <h7 style={{ color: "#F0E3CA" }} className="text-center container">
            Using APIs integrations, React JavaScript, Bootstrap and other
            libraries.
          </h7>
        </div>

        <Link className="navbar-brand d-flex justify-content-center" to="#">
          <img
            src={ironhack}
            width="90"
            height="90"
            className="d-inline-block align-top"
            alt="logo Ironhack"
          />
        </Link>
      </div>
    </footer>
  );
}
