import React, { Component, Fragment } from "react";
class chat extends Component {
  handleKeyDown = e => {
    if (e.key === "Enter") {
      console.log("KLIKŁEM ENTER");
    }
  };
  render() {
    return (
      <Fragment>
        <h3>CHAT</h3>
        <p>{this.props.content}</p>
        <form>
          <textarea type="text" onKeyDown={this.handleKeyDown} />
        </form>
      </Fragment>
    );
  }
}
export default chat;
