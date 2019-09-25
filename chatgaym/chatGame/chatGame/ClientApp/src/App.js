import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Component, Fragment } from "react";
import { ReactReduxContext, connect } from "react-redux";
import { createStore, combineReducers } from "redux";
import { bindActionCreators } from "redux";
import profile from "./Components/profile";
import Game from "./MainComponents/game";
import Table from "./MainComponents/table";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginSite from "./MainComponents/loginSite";
import SignIn from "./MainComponents/signIn";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={LoginSite} />
        <Route path="/game" component={Game} />
        <Route path="/table" component={Table} />
        <Route path="/signIn" component={SignIn} />
      </div>
    </Router>
  );
}
const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(App);
