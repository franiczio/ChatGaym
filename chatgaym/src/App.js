import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import Chat from "./Components/chat";
import { ReactReduxContext, connect } from "react-redux";
import { createStore, combineReducers } from "redux";
import chatReducer from "./Reducers/chat-reducer";
import updateChatContent from "./Actions/chat-actions";

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
// store.subscribe();
const mapStateToProps = state => {
  return {
    messages: state
  };
};
// store.dispatch();
const mapDispatchToProps = dispatch => {
  return {
    submitNewMessage: message => {
      dispatch(updateChatContent(message));
    }
  };
};

class AppWrapper extends Comment {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

const ConnectedComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
export default App;
