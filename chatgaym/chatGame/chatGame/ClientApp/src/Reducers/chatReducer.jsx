import { UPDATE_CHAT } from "../Actions/chatActions";
import chat from "../Components/chat";
const defaultChats = [
  { chat: ["WELCOME ON MAIN CHAT"], id: 0 },
  { chat: [], id: 1 },
  { chat: [], id: 2 }
];

export default function chatReducer(state = defaultChats, { type, payload }) {
  switch (type) {
    case UPDATE_CHAT: {
      const chatContent = [];
      state.forEach(chats => {
        if (chats.id === payload.id) {
          chats.chat = [...chats.chat, payload.message];
        }
      });
      return state;
    }
    case UPDATE_CHAT: {
      console.log(state);
      return state;
      }
      //TODO new case for return chat content from C# server, and parse it to list.
    default:
      return state;
  }
}
