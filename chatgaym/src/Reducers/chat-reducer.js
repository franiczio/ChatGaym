import { UPDATE_CHAT } from "../Actions/chat-actions";
export default function chatReducer(state = [], { type, payload }) {
  switch (type) {
    case UPDATE_CHAT:
      return [...state, payload.message];
    default:
      return state;
  }
}
