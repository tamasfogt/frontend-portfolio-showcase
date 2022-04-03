import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isFetching: false,
  lots: [],
};
const portfolioSlice = createSlice({
  name: "lots",
  initialState: INITIAL_STATE,
  reducers: {
    fetchLotsStart(state, action) {
      state.isFetching = true;
    },
    fetchFailure(state, action) {
      state.isFetching = false;
    },
    fetchLotsSuccess(state, action) {
      state.isFetching = false;
      state.lots = action.payload.data;
    },
  },
});

export const { fetchFailure, fetchLotsStart, fetchLotsSuccess } =
  portfolioSlice.actions;

export default portfolioSlice.reducer;
