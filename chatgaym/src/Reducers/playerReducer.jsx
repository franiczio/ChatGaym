import { SHOW_ACTIVE_PLAYERS } from "../Actions/playerActions";
import { SHOW_INVITATION } from "../Actions/invitationActions";

const defaultPlayers = [
  { nickName: "Michal", isLogged: true, isInvitationVisible: false },
  { nickName: "Pietrek", isLogged: true, isInvitationVisible: false }
];
export default function playerReducer(state = defaultPlayers, action) {
  switch (action.type) {
    case SHOW_ACTIVE_PLAYERS: {
      const newState = [];
      state.forEach(player => {
        if (player.isLogged) {
          newState.push(player);
        }
      });
      return newState;
    }

    case SHOW_INVITATION: {
      state.forEach(player => {
        player.isInvitationVisible = true;
        console.log(player.isInvitationVisible);
      });
    }

    default:
      return state;
  }
}
