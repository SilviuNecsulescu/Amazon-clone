import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    SET_USER: (state, action) => {
      state.user = action.payload;
    },
    SIGN_OUT: (state) => {
      state.user = {};
    },
  },
});

export const { SET_USER, SIGN_OUT } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
