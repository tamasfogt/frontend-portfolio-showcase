import { takeLatest, put, all, call } from "redux-saga/effects";

import UserActionTypes from "./user.types";
import { signInSucess, signOutSucess } from "./user.slice";
import { signUpUser, signInUser } from "../../services/user.service";
import { pushNewToast } from "../toaster/toaster.sagas";

function* signUp({ payload }) {
  try {
    const result = yield call(signUpUser, { ...payload });
    localStorage.setItem("authtoken", result.token);
    yield put(signInSucess(result)); // registration and sign in gives back the same object so I can sign in with it
  } catch (error) {
    const message = error.response
      ? error.response.data.message
      : error.message;
    yield call(pushNewToast, { payload: { type: "error", message: message } });
  }
}
function* signIn({ payload }) {
  try {
    const result = yield call(signInUser, { ...payload });
    localStorage.setItem("authtoken", result.token);
    yield put(signInSucess(result));
  } catch (error) {
    const message = error.response
      ? error.response.data.message
      : error.message;
    yield call(pushNewToast, { payload: { type: "error", message: message } });
  }
}
function* signOut() {
  try {
    localStorage.removeItem("authtoken");
    yield put(signOutSucess());
  } catch (error) {
    yield call(pushNewToast, {
      payload: { type: "error", message: "Error happened" },
    });
  }
}

function* onSignUpSagaStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}
function* onSignInStart() {
  yield takeLatest(UserActionTypes.SIGN_IN_START, signIn);
}
function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield all([
    call(onSignUpSagaStart),
    call(onSignInStart),
    call(onSignOutStart),
  ]);
}
