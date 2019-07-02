import Popup from "reactjs-popup";
import React, { Component, Fragment } from "react";
import NewWindow from "react-new-window";

class InvPlayer extends Component {
  createTable = () => {
    console.log("działam");
    window.open("http://localhost:3000/table", "Data", "height=250,width=250");
    return (
      <NewWindow>
        <h1>Hi 👋</h1>
      </NewWindow>
    );
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
