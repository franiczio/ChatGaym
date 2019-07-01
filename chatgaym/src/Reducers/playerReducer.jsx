import SHOW_ACTIVE_PLAYERS from "../Actions/playerActions";

const defaultPlayers = [
  { nickName: "Michal", isLogged: false },
  { nickName: "Pietrek", isLogged: true }
];
export default function playerReducer(state = defaultPlayers, action) {
  switch (action.type) {
    case SHOW_ACTIVE_PLAYERS: {
      state.map(player => {
        if (!player.isLogged) {
          state.pop(player);
        }
      });
      return state;
    }
    default:
      return state;
  }
}
