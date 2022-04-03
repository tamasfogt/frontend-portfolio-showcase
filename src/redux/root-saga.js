import { all, call } from "redux-saga/effects";

import { lotsSagas } from "./lots/lots.sagas";
import { stocksSagas } from "./stocks/stocks.sagas";
import { userSagas } from "./user/user.sagas";
import { toasterSagas } from "./toaster/toaster.sagas";

export default function* rootSaga() {
  yield all([
    call(stocksSagas),
    call(lotsSagas),
    call(userSagas),
    call(toasterSagas),
  ]);
}
