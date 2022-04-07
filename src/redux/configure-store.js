import { combineReducers } from "redux";
import logger from "redux-logger";
import userReducer from "./user/user.slice";
import stocksReducer from "./stocks/stocks.slice";
import toasterReducer from "./toaster/toaster.slice";

import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";

import createSagaMiddleware from "redux-saga";

import rootSaga from "./root-saga";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["stocks", "toaster"],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    user: userReducer,
    stocks: stocksReducer,
    toaster: toasterReducer,
  })
);
const store = () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      })
        .concat(sagaMiddleware)
        .concat(logger),
  });
  sagaMiddleware.run(rootSaga);
  return store;
};

export default store;
