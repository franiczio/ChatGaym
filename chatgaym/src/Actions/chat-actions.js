export const UPDATE_CHAT = "chat:updateChat";

export function updateChatContent(newMessage) {
  return {
    type: UPDATE_CHAT,
    payload: {
      message: newMessage
    }
  };
}
