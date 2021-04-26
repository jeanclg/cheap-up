import React from "react";
import { Link } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function About() {
  return (
    <div>
      <Navbar />
      <h1 style={{ color: "#F0E3CA" }}>About us</h1>

      <div></div>

      <Footer />
    </div>
  );
}
