import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';

import Home from "./components/Home"
import About from "./components/About"
import GamesList from "./components/GamesList"


function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="row">        
          <Route exact path="/" component={Home} />
          <Route exact path="/GamesList/:store" component={GamesList} />
          <Route exact path="/About" component={About} />
        </div>
      </div>
    </BrowserRouter>
  )
 
}

export default App;
