import React, { Component, Fragment } from "react";
import updateChatContent from "../Actions/chat-actions";
import { bindActionCreators } from "redux";
import chatReducer from "../Reducers/chat-reducer";
const UPDATE_CHAT = "chat:updateChat";

class chat extends Component {
  handleKeyDown = e => {
    if (e.key === "Enter") {
      console.log("KLIKŁEM ENTER");
    }
  };

  updateChatContent = event => {
    if (event.key === "Enter") {
      console.log(event.target.value);
      event.target.value = "";
    }
    return {
      type: UPDATE_CHAT,
      payload: {
        message: event.target.value
      }
    };
  };

  render() {
    return (
      <Fragment>
        <h3>CHAT</h3>
        <p>{this.props.content}</p>
        <form>
          <textarea type="text" onKeyDown={this.updateChatContent} />
        </form>
      </Fragment>
    );
  }
}

export default chat;
