import React, { Component, Fragment } from "react";
import { ReactReduxContext, connect } from "react-redux";
import userLogin from "../Actions/playerActions";
import InvPlayer from "../Components/invPlayer";
import * as invitationModule from "../Actions/invitationActions";
import Chat from "../Components/chat";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.onUserLogin = this.onUserLogin.bind(this);
    this.onShowInvitation = this.onShowInvitation.bind(this);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    this.onHideInvitation = this.onHideInvitation.bind(this);
  }

  forceUpdateHandler() {
    this.forceUpdate();
  }

  onHideInvitation(event, player) {
    this.props.onHideInvitation(player);
    this.forceUpdateHandler();
  }

  onShowInvitation(event, player) {
    this.props.onShowInvitation(player);
    this.forceUpdateHandler();
  }

  onUserLogin() {
    this.props.onUserLogin();
  }

  componentDidMount() {
  }

  render() {
    let onlineUsers = this.props.player.filter(user => user.isLogged);
    return (
      <Fragment>
        <ul>
          {onlineUsers.map((li, i) => (
            <li
              onMouseEnter={e => {
                this.onShowInvitation(e, li.nickName);
              }}
              onMouseLeave={e => {
                this.onHideInvitation(e, li.nickName);
              }}
              key={i}
            >
              {li.nickName}
              {li.isInvitationVisible ? (
                <InvPlayer currentPlayer={li} history={this.props.history} />
              ) : null}
              {li.isPrivatChatOpen ? <Chat chatId={li.chatId} /> : null}
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}


const mapStateToProps = state => {
  return state;
};
const mapActionsToProps = {
  onShowInvitation: invitationModule.showInvitation,
  onHideInvitation: invitationModule.hideInvitation,
  onUserLogin: userLogin
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(UserList);
