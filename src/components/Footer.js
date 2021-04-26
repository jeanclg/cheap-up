import React from "react";
import { Link } from "react-router-dom";

import Insta from "./insta_logo-removebg-preview.png";
import Linkedin from "./linkedinLogo-removebg-preview.png";
import Twitter from "./twitter_logo-removebg-preview (1).png";
import Github from "./Github_logo-removebg-preview.png";

export default function Footer() {
  return (
    <nav className="navbar navbar-light bg-dark">
      <Link className="navbar-brand" to="#">
        <img
          src={Insta}
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="logo img"
        />
      </Link>

      <Link className="navbar-brand" to="#">
        <img
          src={Twitter}
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="logo img"
        />
      </Link>

      <Link className="navbar-brand" to="#">
        <img
          src={Github}
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="logo img"
        />
      </Link>

      <Link className="navbar-brand" to="#">
        <img
          src={Linkedin}
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="logo img"
        />
      </Link>
    </nav>
  );
}
