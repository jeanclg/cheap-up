import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Home extends Component {
  state = {
    stores: [],
    games: [],
  };

  componentDidMount = async () => {
    try {
      const responseGames = await axios.get(
        "https://www.cheapshark.com/api/1.0/deals?&upperPrice=15"
      );
      const response = await axios.get(
        "https://www.cheapshark.com/api/1.0/stores"
      );
      this.setState({
        stores: [...response.data],
        games: [...responseGames.data],
      });
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    if (!this.state.games) {
      return (
        <div class="spinner-border" role="status">
          <span class="visually-hidden"></span>
        </div>
      );
    } else {
      const arr = [
        ...new Set(
          this.state.games.map((x) => x.storeID).sort((a, b) => a - b)
        ),
      ];
      return (
        <div className="container">
          <div className="card-columns row-cols-md-2 mt-5">
            <div className="col">
              {this.state.stores.map((x) => {
                if (arr.includes(x.storeID)) {
                  return (
                    <div className="text-center mb-5">
                      <Link to={`/GamesList/${x.storeID}`}>
                        <img
                          className="card-img-top"
                          src={`https://www.cheapshark.com/img/stores/logos/${
                            x.storeID - 1
                          }.png`}
                        />
                        <h5
                          style={{
                            backgroundColor: "#1b1a17",
                            color: "#ff8303",
                          }}
                          className="card-title badge badge-dark"
                        >
                          {x.storeName}
                        </h5>
                      </Link>
                    </div>
                  );
                }
              })}
            </div>
          </div>
          {/* <ul class="list-group">
          {this.state.stores.map((x) => {
            if (arr.includes(x.storeID)) {
              return (
                <Link to={`/GamesList/${x.storeID}`}>
                  <li className="list-group-item list-group-item-secondary">
                    <img
                      src={`https://www.cheapshark.com/img/stores/banners/${
                        x.storeID - 1
                      }.png`}
                    />
                  </li>
                </Link>
              );
            }
          })}
        </ul> */}
        </div>
      );
    }
  }
}
