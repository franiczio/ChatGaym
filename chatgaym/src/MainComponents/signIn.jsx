import React, { Component, Fragment } from "react";

class SignIn extends Component {
  closeWindow = () => {
    this.props.history.push("/");
  };
  render() {
    return (
      <Fragment>
        <button onClick={this.closeWindow}>Back to logIn menu</button>
        <form>
          Login:
          <br />
          <input type="text" name="Firstname" />
          <br />
          Password:
          <br />
          <input type="text" name="Password" />
          <br />
          Confirm password:
          <br />
          <input type="text" name="ConfirmPassword" />
          <br />
          <input type="submit" value="GO!" />
        </form>
      </Fragment>
    );
  }
}

export default SignIn;
