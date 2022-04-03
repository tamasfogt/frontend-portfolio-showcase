import { takeLatest, put, all, call } from "redux-saga/effects";
import { getLots } from "../../services/lots.service";

import { fetchFailure, fetchLotsStart, fetchLotsSuccess } from "./lots.slice";

export function* fetchLotsAsync({ payload }) {
  try {
    const result = yield call(getLots, { ...payload });
    yield put(fetchLotsSuccess(result.data));
  } catch (error) {
    yield put(fetchFailure(error.message));
  }
}

export function* fetchLotsSagaStart() {
  yield takeLatest(fetchLotsStart, fetchLotsAsync);
}
export function* lotsSagas() {
  yield all([call(fetchLotsSagaStart)]);
}
