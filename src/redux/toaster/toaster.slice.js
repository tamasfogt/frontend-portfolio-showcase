import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  toasts: [],
};
const toastSlice = createSlice({
  name: "toasts",
  initialState: INITIAL_STATE,
  reducers: {
    pushNewToastSuccess(state, action) {
      state.toasts.push(action.payload);
    },
    removeToastSuccess(state, { payload }) {
      state.toasts = state.toasts.filter((toast) => toast.id !== payload.id);
    },
  },
});

export const { pushNewToastSuccess, removeToastSuccess } = toastSlice.actions;
export default toastSlice.reducer;
