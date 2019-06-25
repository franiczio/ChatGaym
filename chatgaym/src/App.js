import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Chat from "./components/chat";

class App extends Component {
  render() {
    return (
      <div>
        <h1>My Chat Game</h1>
        <Chat content={"asddasd"} />
      </div>
    );
  }
}

export default App;
