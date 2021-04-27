import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import GamesList from "./components/GamesList";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div className="row" style={{ minHeight: "1200px", backgroundColor: "#F0E3CA"}}>
          <Route exact path="/" component={Home} />
          <Route exact path="/GamesList/:id" component={GamesList} />
          <Route exact path="/About" component={About} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
