import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  getStocks,
  addStock,
  deleteStock,
} from "../../services/stocks.service";

import StocksActionTypes from "./stocks.types";
import { pushNewToast } from "../toaster/toaster.sagas";
import {
  fetchStocksStart,
  fetchStocksSuccess,
  fetchStocksFailure,
  addStockSucess,
  deleteStockSucess,
} from "./stocks.slice";

export function* fetchStocksSaga({ payload }) {
  try {
    const result = yield call(getStocks, { ...payload });
    yield put(fetchStocksSuccess(result.data));
  } catch (error) {
    yield put(fetchStocksFailure(error.message));
  }
}
export function* addStockSaga({ payload }) {
  try {
    const result = yield call(addStock, { ...payload });
    yield put(addStockSucess(result.data.data));
    yield call(pushNewToast, {
      payload: {
        type: "success",
        message: "Stock successfully added to the portfolio!",
      },
    });
  } catch (error) {
    const message = error.response
      ? error.response.data.message
      : error.message;
    yield call(pushNewToast, { payload: { type: "error", message: message } });
  }
}
export function* deleteStockSaga({ payload }) {
  try {
    yield call(deleteStock, payload);
    yield put(deleteStockSucess(payload));
    yield call(pushNewToast, {
      payload: {
        type: "success",
        message: "Successfully deleted from the portfolio!",
      },
    });
  } catch (error) {
    const message = error.response
      ? error.response.data.message
      : error.message;
    yield call(pushNewToast, { payload: { type: "error", message: message } });
  }
}

export function* deleteStockSagaStart() {
  yield takeLatest(StocksActionTypes.DELETE_STOCK_START, deleteStockSaga);
}
export function* addStockSagaStart() {
  yield takeLatest(StocksActionTypes.ADD_STOCK_START, addStockSaga);
}
export function* fetchStocksSagaStart() {
  yield takeLatest(fetchStocksStart, fetchStocksSaga);
}
export function* stocksSagas() {
  yield all([
    call(fetchStocksSagaStart),
    call(addStockSagaStart),
    call(deleteStockSagaStart),
  ]);
}
