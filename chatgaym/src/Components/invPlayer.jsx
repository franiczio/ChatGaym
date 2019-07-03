import Popup from "reactjs-popup";
import React, { Component, Fragment } from "react";
import NewWindow from "react-new-window";

class InvPlayer extends Component {
  createTable = () => {
    console.log("działam");
    window.open("http://localhost:3000/table", "Data", "height=550,width=550");
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
