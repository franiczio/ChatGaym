import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AppWrapper from "./App";
import * as serviceWorker from "./serviceWorker";
import { applyMiddleware,createStore, combineReducers } from "redux";
import { ReactReduxContent } from "react-redux";
import { Provider } from "react-redux";
import chatReducer from "./Reducers/chatReducer";
import playerReducer from "./Reducers/playerReducer";
import profileReducer from "./Reducers/profileReducer";
import thunk from 'redux-thunk';

const middlewares = [thunk];

const allReducers = combineReducers({
  player: playerReducer,
  profile: profileReducer,
  chat: chatReducer
});

const store = createStore(allReducers, applyMiddleware(...middlewares));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
