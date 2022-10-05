import { SET_AUTHD_USER, REMOVE_AUTHD_USER } from "../actions/authdUser";

const initialState = null;

export default function authdUser(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHD_USER: {
      return action.username;
    }
    case REMOVE_AUTHD_USER: {
      return null;
    }
    default: {
      return state;
    }
  }
}
