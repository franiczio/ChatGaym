import React, { Component, Fragment } from "react";
import { ReactReduxContext, connect } from "react-redux";
import * as chatActions from "../Actions/chatActions";
const MAIN_CHAT = 0;
class Chat extends Component {
  constructor(props) {
    super(props);
    this.onUpdateChat = this.onUpdateChat.bind(this);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  }

  forceUpdateHandler() {
    this.forceUpdate();
    console.log("forsłem");
  }

  onUpdateChat(event) {
    if (event.key === "Enter") {
      this.props.onUpdateChat(event.target.value, this.props.chatId);
      event.target.value = "";
      this.forceUpdate();
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
          {this.props.chat[this.props.chatId].chat.map((p, i) => (
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
  onUpdateChat: chatActions.updateChat
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(Chat);
