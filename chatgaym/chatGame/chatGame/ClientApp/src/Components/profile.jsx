import React, { Component, Fragment } from "react";
import { ReactReduxContext, connect } from "react-redux";
class Profile extends Component {
  render() {
    return (
      <Fragment>
        <p>Nick: {this.props.profile.nickName}</p>
        <p>Gold: {this.props.profile.gold}</p>
        <p>Attack: {this.props.profile.attack}</p>
        <p>Deffence: {this.props.profile.defence}</p>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
const mapActionsToProps = {};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Profile);
