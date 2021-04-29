import React, { Component } from "react";
import axios from "axios";

export default class GamesList extends Component {
  state = {
    originalList: null,
    originalCopyList: [],
    searchGame: "",
  };

  componentDidMount = async () => {
    try {
      // Pega da api a lista com todos os jogos
      const response = await axios.get(
        `https://www.cheapshark.com/api/1.0/deals?storeID=${this.props.match.params.id}&upperPrice=50`
      );
      this.setState({
        games: [...response.data],
        originalList: [...response.data],
        originalCopyList: [...response.data],
      });
    } catch (err) {
      console.error(err);
    }
  };

  // Metodo que pega o que o usuario digitar no input e coloca no state
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
    // Variavel que tem os estilos para o sifrão da moeda nos preços
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });
    // Verifica se ja foi carregada a api, caso não carrega o spiner
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
          <table className="table table-dark table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">STORE</th>
                <th scope="col">SAVINGS</th>
                <th scope="col">PRICE</th>
                <th scope="col">TITLE</th>
                <th scope="col">DEAL RATING</th>
              </tr>
            </thead>
            <tbody>
              {
                // Roda por cada elemento da lista de jogos e retorna o JSX dos jogos
                this.state.originalList.map((x) => {
                  // Só retorna para a lista os jogos que tenham desconto
                  if (x.savings > 0) {
                    return (
                      <tr key={x.gameID}>
                        <td>
                          <img
                            alt={x.gameID}
                            src={`https://www.cheapshark.com/img/stores/icons/${
                              x.storeID - 1
                            }.png`}
                          />
                        </td>
                        <td>{Math.round(x.savings)}%</td>
                        <td>
                          {formatter.format(x.salePrice)}{" "}
                          <sup>
                            <s>{formatter.format(x.normalPrice)}</s>
                          </sup>
                        </td>
                        <td>
                          <img
                            alt={x.gameID}
                            className="mr-2"
                            src={x.thumb}
                            width="120px"
                            height="45px"
                          />
                          <a
                            style={{ color: "white" }}
                            href={`https://www.cheapshark.com/redirect?dealID=${x.dealID}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {x.title}
                          </a>
                        </td>
                        <td>{x.dealRating}</td>
                      </tr>
                    );
                  } // Precisa ter esse "else return null" pois o map precisa retornar algo diretamente e não dentro de um if
                  else {
                    return null;
                  }
                })
              }
            </tbody>
          </table>
        </div>
      );
    } else {
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
    }
  }
}
