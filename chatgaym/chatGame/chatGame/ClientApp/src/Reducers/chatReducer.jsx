import { UPDATE_CHAT } from "../Actions/chatActions";
import chat from "../Components/chat";
const defaultChats = [
    { chat: ["WELCOME ON MAIN CHAT"], id: 0, lastMessage: 10 },
    { chat: [], id: 1, lastMessage: 10 },
    { chat: [], id: 2, lastMessage: 10 }
];

export default function chatReducer(state = defaultChats, { type, payload }) {
  switch (type) {
    case UPDATE_CHAT: {
      const chatContent = [];
      state.forEach(chats => {
          if (chats.id === payload.id) {
              for (var i = 0; i < payload.message.length; i++){
                  chats.chat = [...chats.chat, payload.message[i]];
              }
              if (payload.message.length > 0) {
                  chats.lastMessage = Date.now();
              }
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
