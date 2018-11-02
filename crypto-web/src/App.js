import React, { Component } from "react";
import OrderBook from "./components/OrderBook";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <OrderBook />
      </div>
    );
  }
}

export default App;
