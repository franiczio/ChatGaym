import Popup from "reactjs-popup";
import React, { Component, Fragment } from "react";

class InvPlayer extends Component {
  render() {
    return (
      <Fragment>
        <button>{this.props.name}</button>
        <button>{this.props.name}</button>
      </Fragment>
    );
  }
}

export default InvPlayer;
