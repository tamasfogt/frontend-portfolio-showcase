import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  token: null,
  currentUser: null,
};
const userSlice = createSlice({
  name: "currentUser",
  initialState: INITIAL_STATE,
  reducers: {
    signInSucess(state, action) {
      state.token = action.payload.token;
      state.currentUser = action.payload.data.user;
    },
    signOutSucess(state) {
      state.token = null;
      state.currentUser = null;
    },
  },
});

export const { signInSucess, signOutSucess } = userSlice.actions;
export default userSlice.reducer;
