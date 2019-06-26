export const UPDATE_CHAT = "chat:updateChat";

export default function updateChatContent(newMessage) {
  console.log("zadziałało");
  return {
    type: UPDATE_CHAT,
    payload: {
      message: newMessage
    }
  };
}
