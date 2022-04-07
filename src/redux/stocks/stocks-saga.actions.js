import StocksActionTypes from "./stocks.types";
export const addStockStart = (stockData) => ({
  type: StocksActionTypes.ADD_STOCK_START,
  payload: stockData,
});
export const deleteStockStart = (stockData) => ({
  type: StocksActionTypes.DELETE_STOCK_START,
  payload: stockData,
});
