import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  stocks: [
    { id: 1, symbol: "FB", quantity: 1 },
    { id: 2, symbol: "BABA" },
    { id: 3, symbol: "SPQR" },
  ],
  totalCount: 0,
};
const stocksSlice = createSlice({
  name: "stocks",
  initialState: INITIAL_STATE,
  reducers: {
    fetchStocksStart(state, action) {
      state.isFetching = true;
    },
    fetchFailure(state, action) {
      state.isFetching = false;
    },
    fetchStocksSuccess(state, action) {
      state.isFetching = false;
      state.stocks = action.payload.data;
      state.totalCount = action.payload.totalCount;
      // TODO a fees és a costot majd valahogy ki kell számolni..
    },
  },
});

export const { fetchFailure, fetchStocksStart, fetchStocksSuccess } =
  stocksSlice.actions;

export default stocksSlice.reducer;
