import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Chat from "./Components/chat";
import { ReactReduxContext } from "react-redux";
import { createStore, combineReducers } from "redux";
import chatReducer from "./Reducers/chat-reducer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: []
    };
  }
  render() {
    return (
      <div>
        <Chat state={this.state.allMessages} />
        <h1>My Chat Game</h1>
      </div>
    );
  }
}
const store = createStore(chatReducer);
const Provider = ReactReduxContext.Provider;

// const mapStateToProps = (state) =>{
//   reutrn{
//     messages:state
//   };
// }

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
