export const UPDATE_CHAT = "updatechat";

export const updateChat = (newMessage, chatId) => {
  return {
    type: UPDATE_CHAT,
    payload: {
      message: newMessage,
      id: chatId
    }
  };
};

