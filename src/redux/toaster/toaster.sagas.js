import { takeLatest, put, all, call } from "redux-saga/effects";

import ToasterActionTypes from "./toaster.types";
import { pushNewToastSuccess, removeToastSuccess } from "./toaster.slice";

export function* pushNewToast({ payload }) {
  try {
    const data = { id: new Date().getTime(), ...payload }; // onlay need unique id for the client so this is enough
    yield put(pushNewToastSuccess(data));
  } catch (error) {
    console.error("Redux Toast: Couldn't push error into the list.");
  }
}
export function* removeToast({ payload }) {
  try {
    yield put(removeToastSuccess(payload));
  } catch (error) {
    console.error("Redux Toast: Couldn't push error into the list.");
  }
}

function* onNewToast() {
  yield takeLatest(ToasterActionTypes.NEW_TOAST, pushNewToast);
}

function* onRemoveToast() {
  yield takeLatest(ToasterActionTypes.REMOVE_TOAST, removeToast);
}

export function* toasterSagas() {
  yield all([call(onNewToast), call(onRemoveToast)]);
}
