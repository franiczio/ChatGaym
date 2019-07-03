import React, { Component, Fragment } from "react";

class LoginSite extends Component {
  render() {
    return (
      <Fragment>
        <button>New Account</button>
        <form>
          First name:
          <br />
          <input type="text" name="firstname" />
          <br />
          Last name:
          <br />
          <input type="text" name="lastname" />
          <br />
          <input type="submit" value="GO!" />
        </form>
      </Fragment>
    );
  }
}

export default LoginSite;
