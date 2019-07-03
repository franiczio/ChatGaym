import Popup from "reactjs-popup";
import React, { Component, Fragment } from "react";
import NewWindow from "react-new-window";

class InvPlayer extends Component {
  createTable = () => {
    console.log("działam");
    this.props.history.push("/table");
  };

  render() {
    return (
      <Fragment>
        <button>CHAT</button>
        <p> </p>
        <button onClick={this.createTable}>INVIDE TO GAME</button>
      </Fragment>
    );
  }
}

export default InvPlayer;
