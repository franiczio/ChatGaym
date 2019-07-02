import { SHOW_PROFILE } from "../Actions/gameActions";
const defaultState = {
  nickName: "Michal",
  isLogged: true,
  isInvitationVisible: false,
  attack: 12,
  defence: 3,
  gold: 150,
  actions: [],
  isProfileVisible: false
};
export default function chatReducer(state = defaultState, action) {
  switch (action.type) {
    case SHOW_PROFILE: {
      if (state.isProfileVisible === false) {
        console.log("FALSEEEE");
        state.isInvitationVisible = true;
      }
    }
    default:
      return state;
  }
}
