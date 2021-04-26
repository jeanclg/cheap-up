import React from "react";
import { Link } from "react-router-dom";
import logo from "./cheap_up_para_rmv_bg-removebg-preview.png";

export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-dark">
      <Link className="navbar-brand" to="#">
        <img
          src={logo}
          width="134.68"
          height="50"
          className="d-inline-block align-top"
          alt="logo img"
        />
      </Link>

      <Link className="navbar-brand" to="#">
        <p style={{ color: "#F0E3CA" }}>About</p>
      </Link>
    </nav>
  );
}
