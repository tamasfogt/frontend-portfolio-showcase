import { createSelector } from "reselect";

const selectStocks = (state) => state.stocks;

export const selectStockList = createSelector(
  [selectStocks],
  (stocksState) => stocksState.stocks
);

export const selectStockItemBySymbol = (symbol) =>
  createSelector([selectStockList], (stocks) =>
    stocks.find((stock) => stock.symbol === symbol)
  );
export const selectLotsBySymbol = (symbol) =>
  createSelector([selectStockList], (stocks) => {
    const stock = stocks.find((stock) => stock.symbol === symbol);
    return stock ? stock.lots : [];
  });
