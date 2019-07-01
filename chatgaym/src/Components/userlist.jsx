import React, { Component, Fragment } from "react";
import { ReactReduxContext, connect } from "react-redux";
import userLogin from "../Actions/playerActions";
import InvPlayer from "../Components/invPlayer";
import showInvitation from "../Actions/invitationActions";
// import PropTypes from "prop-types";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.onUserLogin = this.onUserLogin.bind(this);
    this.onShowInvitation = this.onShowInvitation.bind(this);
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  }

  forceUpdateHandler() {
    this.forceUpdate();
  }

  onShowInvitation() {
    this.props.onShowInvitation();
    this.forceUpdate();
  }

  onUserLogin() {
    this.props.onUserLogin();
  }

  componentDidMount() {
    // this method is doing things before render
  }

  render() {
    let onlineUsers = this.props.player.filter(user => user.isLogged);
    console.log(onlineUsers);
    return (
      <Fragment>
        <ul>
          {onlineUsers.map((li, i) => (
            <li onMouseEnter={this.onShowInvitation} key={i}>
              {li.nickName}
              {li.isInvitationVisible ? <InvPlayer name="asd" /> : null}
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

// UserList.protoTypes = {
//   player: PropTypes.array.isRequired
// };

const mapStateToProps = state => {
  // player: state.player;
  return state;
};
const mapActionsToProps = {
  onShowInvitation: showInvitation,
  onUserLogin: userLogin
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(UserList);
