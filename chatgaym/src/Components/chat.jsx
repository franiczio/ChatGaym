import React, { Component, Fragment } from "react";
class chat extends Component {
  render() {
    return (
      <Fragment>
        <h3>CHAT</h3>
        <p>state here</p>
        <form>
          <textarea type="text" onKeyDown={this._handleKeyDown} />
        </form>
      </Fragment>
    );
  }
}
export default chat;
