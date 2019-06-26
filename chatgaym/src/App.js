import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Chat from "./Components/chat";
class App extends Component {
  render() {
    return (
      <div>
        <Chat />
        <h1>My Chat Game</h1>
      </div>
    );
  }
}

export default App;
