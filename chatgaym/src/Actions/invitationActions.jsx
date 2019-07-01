export const SHOW_INVITATION = "showInvitation";
export const HIDE_INVITATION = "hideInvitation";

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
