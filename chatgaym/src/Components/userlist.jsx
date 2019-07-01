import React, { Component, Fragment } from "react";
import { ReactReduxContext, connect } from "react-redux";
import userLogin from "../Actions/playerActions";
// import PropTypes from "prop-types";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.onUserLogin = this.onUserLogin.bind(this);
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
            <li key={i}>{li.nickName}</li>
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
  onUserLogin: userLogin
};

export default connect(
  mapStateToProps,
  mapActionsToProps
  // { onUserLogin }
)(UserList);
