import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Chat from "./Components/chat";
import UserList from "./Components/userlist";
import { ReactReduxContext, connect } from "react-redux";
import { createStore, combineReducers } from "redux";
import { bindActionCreators } from "redux";

class App extends Component {
  render() {
    return (
      <div>
        <h1>CHAT GAME</h1>
        <Chat />
        <UserList />
        <button>SEE PROFILE</button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(App);
