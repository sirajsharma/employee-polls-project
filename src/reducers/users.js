import { SET_USERS, ADD_CREATED_QUESTION } from "../actions/users";

export default function users(state = null, action) {
  switch (action.type) {
    case SET_USERS: {
      return action.users;
    }
    case ADD_CREATED_QUESTION: {
      const { questionId, author } = action;
      const newState = { ...state };
      newState[author].questions.push(questionId);
      return newState;
    }
    default: {
      return state;
    }
  }
}
