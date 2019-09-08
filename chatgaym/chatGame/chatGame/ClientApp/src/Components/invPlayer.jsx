import Popup from "reactjs-popup";
import React, { Component, Fragment } from "react";
import { ReactReduxContext, connect } from "react-redux";
import * as invitationModule from "../Actions/invitationActions";

class InvPlayer extends Component {
  constructor(props) {
    super(props);
    this.onEnterPrivateChat = this.onEnterPrivateChat.bind(this);
  }

  createTable = () => {
    console.log("działam");
    this.props.history.push("/table");
  };

  onEnterPrivateChat(player) {
    console.log(player.isPrivatChatOpen);
    this.props.onEnterPrivateChat(player.nickName);
    this.forceUpdate();
  }

  render() {
    return (
      <Fragment>
        <button
          className="button"
          onClick={() => {
            this.onEnterPrivateChat(this.props.currentPlayer);
          }}
        >
          CHAT
        </button>
        <p> </p>
        <button onClick={this.createTable}>INVIDE TO GAME</button>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
const mapActionsToProps = {
  onEnterPrivateChat: invitationModule.enterPrivateChat
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(InvPlayer);
