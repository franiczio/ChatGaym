import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Component, Fragment } from "react";
import { ReactReduxContext, connect } from "react-redux";
import { createStore, combineReducers } from "redux";
import { bindActionCreators } from "redux";
import profile from "./Components/profile";
import Game from "./MainComponents/game";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Route path="/game" component={Game} />
      </div>
    </Router>
  );
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(App);
