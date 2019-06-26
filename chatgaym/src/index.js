import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, combineReducers } from "redux";
import { ReactReduxContent } from "react-redux";
//import chatReducer from "./Reducers/chat-reducer";

const UPDATE_CHAT = "chat:updateChat";
function chatReducer(state = [], { type, payload }) {
  switch (type) {
    case UPDATE_CHAT:
      return payload.message;
    default:
      return state;
  }
}

const allReducers = combineReducers({
  chat: chatReducer
});
const store = createStore(allReducers);

ReactDOM.render(
  // <Provider store={store}>
  <App />,
  // </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
