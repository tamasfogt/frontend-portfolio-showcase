import UserActionTypes from "./user.types";
export const signUpStart = (userData) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userData,
});

export const signInStart = (userCredentials) => ({
  type: UserActionTypes.SIGN_IN_START,
  payload: userCredentials,
});
export const signOutStart = (userCredentials) => ({
  type: UserActionTypes.SIGN_OUT_START,
  payload: userCredentials,
});
