export const SHOW_INVITATION = "showInvitation";

export default function showInvitation(player) {
  return {
    type: SHOW_INVITATION,
    playerName: player
  };
}
