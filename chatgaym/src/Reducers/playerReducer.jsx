import { SHOW_ACTIVE_PLAYERS } from "../Actions/playerActions";

const defaultPlayers = [
  { nickName: "Michal", isLogged: false },
  { nickName: "Pietrek", isLogged: true }
];
export default function playerReducer(state = defaultPlayers, { type }) {
  switch (type) {
    case SHOW_ACTIVE_PLAYERS: {
      const newState = [];
      state.forEach(player => {
        if (player.isLogged) {
          newState.push(player);
        }
      });
      return newState;
    }
    default:
      return state;
  }
}
