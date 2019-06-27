import React, { Component, Fragment } from "react";
import { ReactReduxContext, connect } from "react-redux";

// import updateChatContent from "./Actions/chat-Actions";
// import chatReducer from "./Reducers/chat-reducer";

const UPDATE_CHAT = "chat:updateChat";

class Chat extends Component {
  render() {
    return (
      <Fragment>
        <h3>CHAT</h3>
        <p>{this.props.chat}</p>
        <form>
          <textarea />
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps)(Chat);
