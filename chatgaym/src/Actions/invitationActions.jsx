export const SHOW_INVITATION = "showInvitation";
export const HIDE_INVITATION = "hideInvitation";
export const ENTER_PRIVATE_CHAT = "enterPrivateChat";

export const showInvitation = player => {
  return {
    type: SHOW_INVITATION,
    playerName: player
  };
};

export const hideInvitation = player => {
  return {
    type: HIDE_INVITATION,
    playerName: player
  };
};

export const enterPrivateChat = player => {
  return {
    type: ENTER_PRIVATE_CHAT,
    playerName: player
  };
};
