import React, { Component, Fragment } from "react";

import Chat from "../Components/chat";
class Table extends Component {
  backToMain = () => {
    this.props.history.push("/game");
  };
  render() {
    return (
      <Fragment>
        <h1>TABLE</h1>
        <Chat />
        <button onClick={this.backToMain}>EXIT GAME</button>
      </Fragment>
    );
  }
}

export default Table;
