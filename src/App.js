import React, { Component } from "react";
import "./index.css";
import { CardList } from "./components/card-list/index";
import { Searchbox } from "./components/search-box";
import { Card } from "./components/card/index";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ robots: data }));
  }

  render() {
    return (
      <div className="App">
        <h1>Роботуудын хайлт </h1>
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}
