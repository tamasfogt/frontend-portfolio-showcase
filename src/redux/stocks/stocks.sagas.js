import { takeLatest, put, all, call } from "redux-saga/effects";
import { getStocks } from "../../services/stocks.service";

import {
  fetchFailure,
  fetchStocksStart,
  fetchStocksSuccess,
} from "./stocks.slice";

export function* fetchStocksAsync({ payload }) {
  try {
    const result = yield call(getStocks, { ...payload });
    yield put(fetchStocksSuccess(result.data));
  } catch (error) {
    yield put(fetchFailure(error.message));
  }
}
// TODO create detele etc

export function* fetchStocksSagaStart() {
  yield takeLatest(fetchStocksStart, fetchStocksAsync);
}
export function* stocksSagas() {
  yield all([call(fetchStocksSagaStart)]);
}
