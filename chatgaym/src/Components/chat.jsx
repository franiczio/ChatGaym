import React, { Component, Fragment } from "react";
// import updateChatContent from "./Actions/chat-Actions";
// import chatReducer from "./Reducers/chat-reducer";

const UPDATE_CHAT = "chat:updateChat";

class Chat extends Component {
  render() {
    return (
      <Fragment>
        <h3>CHAT</h3>
        <p>{this.props.state}</p>
        <form>
          <textarea />
        </form>
      </Fragment>
    );
  }
}

export default Chat;
