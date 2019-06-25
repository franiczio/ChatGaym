import React from "react";
import "./App.css";
import { Component } from "react";
import { createStore } from "redux";

function reducer() {
  return "state";
}
const store = createStore(reducer);

console.log(store.getState());

class App extends Component {
  render() {
    return <div>HELLO WORLD</div>;
  }
}

export default App;
