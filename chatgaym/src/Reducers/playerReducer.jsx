import { SHOW_ACTIVE_PLAYERS } from "../Actions/playerActions";
import {
  SHOW_INVITATION,
  ENTER_PRIVATE_CHAT
} from "../Actions/invitationActions";
import { HIDE_INVITATION } from "../Actions/invitationActions";

const defaultPlayers = [
  {
    nickName: "Michal",
    isLogged: true,
    isInvitationVisible: false,
    isPrivatChatOpen: false,
    chatId: 1,
    attack: 12,
    defence: 3,
    gold: 150,
    actions: []
  },
  {
    nickName: "Pietrek",
    isLogged: true,
    isInvitationVisible: false,
    isPrivatChatOpen: false,
    chatId: 2,
    attack: 10,
    defence: 4,
    gold: 120,
    actions: []
  }
];
export default function playerReducer(state = defaultPlayers, action) {
  switch (action.type) {
    case SHOW_ACTIVE_PLAYERS: {
      const newState = [];
      state.forEach(player => {
        console.log(player.nickName);
        if (player.isLogged) {
          newState.push(player);
        }
      });
      return newState;
    }

    case SHOW_INVITATION: {
      state.forEach(user => {
        if (user.nickName === action.playerName) {
          user.isInvitationVisible = true;
        }
      });
      return state;
    }

    case HIDE_INVITATION: {
      state.forEach(user => {
        if (user.nickName === action.playerName) {
          user.isInvitationVisible = false;
        }
      });
      return state;
    }

    case ENTER_PRIVATE_CHAT: {
      state.forEach(user => {
        if (user.nickName === action.playerName) {
          if (user.isPrivatChatOpen === false) {
            user.isPrivatChatOpen = true;
          } else {
            user.isPrivatChatOpen = false;
          }
        }
      });
      return state;
    }

    default:
      return state;
  }
}
