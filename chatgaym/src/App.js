import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Chat from "./Components/chat";
import { ReactReduxContext, connect } from "react-redux";
import { createStore, combineReducers } from "redux";
import { bindActionCreators } from "redux";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div>HelloWorld</div>
        <Chat />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(App);
