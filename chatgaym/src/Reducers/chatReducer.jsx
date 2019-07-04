import { UPDATE_CHAT } from "../Actions/chatActions";
import chat from "../Components/chat";
const defaultChats = [
  { chaty: ["WELCOME ON MAIN CHAT"], id: 0 },
  { chaty: [], id: 1 }
];
//const defaultChats = ["asd", "ad"];

export default function chatReducer(state = defaultChats, { type, payload }) {
  switch (type) {
    case UPDATE_CHAT: {
      const chatContent = [];
      state.forEach(chats => {
        console.log("dupa");
        console.log(chats.id);
        console.log(chats);
        if (chats.id === payload.id) {
          chats.chaty = [...chats.chaty, payload.message];
        }
      });
      return state;
    }
    case UPDATE_CHAT: {
      console.log(state);
      return state;
    }
    default:
      return state;
  }
}
