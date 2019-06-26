import React, { Component, Fragment } from "react";
const UPDATE_CHAT = "chat:updateChat";

class Chat extends Component {
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

export default Chat;
