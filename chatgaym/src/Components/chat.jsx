import React, { Component, Fragment } from "react";
import { ReactReduxContext, connect } from "react-redux";
import updateChat from "../Actions/chatActions";

// import updateChatContent from "./Actions/chat-Actions";
// import chatReducer from "./Reducers/chat-reducer";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.onUpdateChat = this.onUpdateChat.bind(this);
  }
  onUpdateChat(event) {
    if (event.key === "Enter") {
      this.props.onUpdateChat(event.target.value);
      event.target.value = "";
    }
  }
  functionToTryEvents() {
    console.log("Now its working");
  }

  render() {
    return (
      <Fragment>
        <h3 onMouseEnter={this.functionToTryEvents}>CHAT</h3>
        <div>
          {this.props.chat.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <form>
          <textarea type="text" onKeyDown={this.onUpdateChat} />
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
const mapActionsToProps = {
  onUpdateChat: updateChat
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(Chat);
