export const UPDATE_CHAT = "chat:updatechat";

export default function updateChat(newMessage, chatId) {
  return {
    type: UPDATE_CHAT,
    payload: {
      message: newMessage,
      id: chatId
    }
  };
}
