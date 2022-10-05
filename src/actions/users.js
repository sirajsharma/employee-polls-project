export const SET_USERS = "SET_USERS";
export const ADD_CREATED_QUESTION = "ADD_CREATED_QUESTION";

export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

export const addCreatedQuestion = (questionId, author) => ({
  type: ADD_CREATED_QUESTION,
  questionId,
  author,
});
