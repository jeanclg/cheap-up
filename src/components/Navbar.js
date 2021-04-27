import React from "react";
import { Link } from "react-router-dom";
import logo from "./cheap_up_para_rmv_bg-removebg-preview.png";

export default function Navbar() {
  return (
    <nav className="navbar sticky-top navbar-light" style={{backgroundColor: "#1b1a17"}}>
      <Link className="navbar-brand" to="/">
        <img
          src={logo}
          width="134.68"
          height="50"
          className="d-inline-block align-top"
          alt="logo img"
        />
      </Link>

      <Link className="navbar-brand" to="/About">
        <p style={{ color: "#FF8303" }}>About</p>
      </Link>
    </nav>
  );
}
