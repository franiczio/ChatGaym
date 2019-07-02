import React, { Component, Fragment } from "react";
import { ReactReduxContext, connect } from "react-redux";
import showProfile from "../Actions/gameActions";

import Chat from "../Components/chat";
import UserList from "../Components/userlist";
import Profile from "../Components/profile";

class Game extends Component {
  constructor(props) {
    super(props);
    this.onShowProfile = this.onShowProfile.bind(this);
  }
  onShowProfile() {
    this.props.onShowProfile();
    console.log(this.props.profile.isProfileVisible);
    this.forceUpdate();
  }
  render() {
    return (
      <Fragment>
        <h1>CHAT GAME</h1>
        <Chat />
        <UserList />
        <button onClick={this.onShowProfile}>
          {this.props.profile.isProfileVisible ? "HIDE PROFILE" : "SEE PROFILE"}
        </button>
        {this.props.profile.isProfileVisible ? <Profile /> : null}
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return state;
};
const mapActionsToProps = {
  onShowProfile: showProfile
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(Game);
