import { combineReducers } from "redux";

import authdUser from "./authdUser";
import users from "./users";
import loading from "./loading";
import questions from "./questions";

const rootReducer = combineReducers({
  authdUser,
  users,
  loading,
  questions,
});

export default rootReducer;
