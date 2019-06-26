import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Chat from "./Components/chat";
import { ReactReduxContext } from "react-redux";
import { createStore, combineReducers } from "redux";
import chatReducer from "./Reducers/chat-reducer";

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
const store = createStore(chatReducer);
const Provider = ReactReduxContext.Provider;
class AppWrapper extends Comment {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default App;
