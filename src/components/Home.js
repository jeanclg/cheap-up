import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default class Home extends Component {
  state = {
    stores: [],
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "https://www.cheapshark.com/api/1.0/stores"
      );
      this.setState({ stores: [...response.data] });
      console.log(this.state.stores);
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <div className="container">
        <Navbar />
        <ul class="list-group">
          {this.state.stores.map((x) => {
            return (
              <Link to={`/GamesList/${x.storeID}`}>
                <li className="list-group-item">{x.storeName}</li>
              </Link>
            );
          })}
        </ul>
        <Footer />
      </div>
    );
  }
}
