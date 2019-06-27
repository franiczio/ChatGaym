import { UPDATE_CHAT } from "../Actions/chatActions";
export default function chatReducer(state = [], { type, payload }) {
  switch (type) {
    case UPDATE_CHAT:
      return [...state, payload.message];
    default:
      return state;
  }
}
