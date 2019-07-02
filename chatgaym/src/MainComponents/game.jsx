import React, { Component, Fragment } from "react";

import Chat from "../Components/chat";
import UserList from "../Components/userlist";
import Profile from "../Components/profile";

class Game extends Component {
  render() {
    return (
      <Fragment>
        <h1>CHAT GAME</h1>
        <Chat />
        <UserList />
        <button>SEE PROFILE</button>
        {true ? <Profile /> : null}
      </Fragment>
    );
  }
}

export default Game;
