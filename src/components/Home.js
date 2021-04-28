import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Home extends Component {
  state = {
    stores: null,
    games: null,
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
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });

    if (!this.state.games) {
      return (
        <div className="container">
          <div className="d-flex justify-content-center text-center">
            <div
              style={{ width: "10rem", height: "10rem", marginTop: "350px" }}
              className="spinner-border"
              role="status"
            >
              <span className="visually-hidden"></span>
            </div>
          </div>
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
          <h1 className="text-center mt-5">
            Choose your store to see the sales!
          </h1>
          <div className="card-deck row-cols-5 justify-content-center mt-5">
            {this.state.stores.map((x) => {
              if (arr.includes(x.storeID)) {
                return (
                  <div key={x.storeID} className="mb-5 mr-2 ml-2 text-center">
                    <Link to={`/GamesList/${x.storeID}`}>
                      <img
                        alt={x.storeID}
                        className="card-img-top mb-2"
                        src={`https://www.cheapshark.com/img/stores/logos/${
                          x.storeID - 1
                        }.png`}
                      />
                    </Link>
                    <h5
                      style={{
                        backgroundColor: "#1b1a17",
                        color: "#a35709",
                      }}
                      className="card-title alert-link mb-0"
                    >
                      {x.storeName}
                    </h5>
                    <ul
                      className="list-group"
                      style={{ backgroundColor: "#1b1a17" }}
                    >
                      {this.state.games.map((y) => {
                        if (y.storeID === x.storeID && y.dealRating > 9.5) {
                          return (
                            <a
                              key={y.gameID}
                              href={`https://www.cheapshark.com/redirect?dealID=${y.dealID}`}
                            >
                              <li
                                className="list-group-item"
                                style={{
                                  backgroundColor: "#a35709",
                                  color: "#1b1a17",
                                }}
                              >
                                {y.title}
                                <span className="btn btn-dark btn-sm">
                                  {formatter.format(y.salePrice)}
                                </span>
                              </li>
                            </a>
                          );
                        } else {
                          return null;
                        }
                      })}
                    </ul>
                  </div>
                );
              } else {
                return null;
              }
            })}
          </div>
        </div>
      );
    }
  }
}
