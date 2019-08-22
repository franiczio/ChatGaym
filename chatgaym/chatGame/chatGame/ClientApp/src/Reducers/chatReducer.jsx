import { UPDATE_CHAT } from "../Actions/chatActions";
import chat from "../Components/chat";
const defaultChats = [
  { chat: ["WELCOME ON MAIN CHAT"], id: 0, lastMessage: 100 },
    { chat: [], id: 1, lastMessage: 200 },
    { chat: [], id: 2, lastMessage: 300 }
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
              chats.lastMessage = Date.now();
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
