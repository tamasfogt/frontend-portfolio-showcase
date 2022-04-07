import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  stocks: [
    { id: 1, symbol: "FB", quantity: 1, lots: [{}] },
    { id: 2, symbol: "BABA", lots: [] },
    { id: 3, symbol: "SPQR", lots: [] },
  ],
  totalCount: 0,
  isFetching: false,
};
const stocksSlice = createSlice({
  name: "stocks",
  initialState: INITIAL_STATE,
  reducers: {
    addStockSucess(state, { payload }) {
      state.stocks.push(payload);
    },
    deleteStockSucess(state, { payload: { id } }) {
      state.stocks = state.stocks.filter((stock) => stock._id === id);
      state.totalCount--;
    },
    fetchStocksStart(state, action) {
      state.isFetching = true;
    },
    fetchStocksSuccess(state, action) {
      state.isFetching = false;
      state.stocks = action.payload.data;
      state.totalCount = action.payload.totalCount;
    },
    fetchStocksFailure(state, action) {
      state.isFetching = false;
    },
  },
});

export const {
  addStockSucess,
  deleteStockSucess,
  fetchStocksStart,
  fetchStocksFailure,
  fetchStocksSuccess,
} = stocksSlice.actions;

export default stocksSlice.reducer;
