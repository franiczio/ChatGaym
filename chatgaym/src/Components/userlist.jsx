import React, { Component, Fragment } from "react";
import { ReactReduxContext, connect } from "react-redux";
import userLogin from "../Actions/playerActions";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.onUserLogin = this.onUserLogin.bind(this);
  }

  onUserLogin() {
    this.props.onUserLogin();
  }

  render() {
    return (
      <Fragment>
        <p>TO JEST LISTA</p>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
const mapActionsToProps = {
  onUserLogin: userLogin
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(UserList);
