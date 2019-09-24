import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";

class LoginSite extends Component {
  redirectToSignInSite = () => {
    this.props.history.push("/signIn");
  };
  render() {
    return (
      <Fragment>
        <button onClick={this.redirectToSignInSite}>New Account</button>
        <form>
          First name:
          <br />
          <input type="text" name="Nick" />
          <br />
          Last name:
          <br />
          <input type="text" name="Password" />
          <br />
          <input type="submit" value="GO!" />
        </form>
      </Fragment>
    );
  }
}

export default LoginSite;
