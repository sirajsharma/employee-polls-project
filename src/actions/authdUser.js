import { authUser } from "../utils/API";

export const REMOVE_AUTHD_USER = "REMOVE_AUTHD_USER";
export const SET_AUTHD_USER = "SET_AUTHD_USER";

export const setAuthdUser = (username) => ({
  type: SET_AUTHD_USER,
  username,
});

export const removeAuthdUser = () => ({
  type: REMOVE_AUTHD_USER,
});

export const handleAuthdUser = (userId, userPassword) => async (dispatch) => {
  const user = await authUser(userId, userPassword);
  if (user) {
    dispatch(setAuthdUser(user.id));
  }
};
