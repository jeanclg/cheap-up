import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


export default class GamesList extends Component {
  state = {
    games: [],
    originalList: [],
    originalCopyList: [],
    searchGame: "",
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        `https://www.cheapshark.com/api/1.0/deals?storeID=${this.props.match.params.id}&upperPrice=50`
      );
      this.setState({
        games: [...response.data],
        originalList: [...response.data],
        originalCopyList: [...response.data],
      });
      console.log(this.state.originalList);
    } catch (err) {
      console.error(err);
    }
  };

  handleChange = (event) => {
    const newList = this.state.originalCopyList.filter((x) => {
      return x.title.toLowerCase().includes(event.target.value.toLowerCase());
    });
    this.setState({
      [event.target.name]: event.target.value,
      originalList: newList,
    });
  };

  render() {
    if (this.state.originalList) {
      return (
        <div className="container">
         
          <div className="input-group mb-3 mt-3">
            <input
              onChange={this.handleChange}
              type="text"
              className="form-control"
              name="searchGame"
              value={this.state.name}
              placeholder="Search your game"
            />
          </div>
          <table class="table table-hover">
            <thead>
              <tr>
                <th scope="col">SAVINGS</th>
                <th scope="col">PRICE</th>
                <th scope="col">TITLE</th>
                <th scope="col">DEAL RATING</th>
              </tr>
            </thead>
            <tbody>
              {this.state.originalList.map((x) => {
                return (
                  <tr>
                    <td scope="row">{Math.round(x.savings)}%</td>
                    <td>
                      {x.salePrice}{" "}
                      <sup>
                        <s>{x.normalPrice}</s>
                      </sup>
                    </td>
                    <td>
                      <img
                        className="mr-2"
                        src={x.thumb}
                        width="120px"
                        height="45px"
                      />
                      {x.title}
                    </td>
                    <td>{x.dealRating}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    } else {
      return (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
      );
    }
  }
}
