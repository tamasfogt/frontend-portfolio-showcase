import { createSelector } from "reselect";

const selectStocks = (state) => state.stocks;

export const selectStockList = createSelector(
  [selectStocks],
  (stocksState) => stocksState.stocks
);
