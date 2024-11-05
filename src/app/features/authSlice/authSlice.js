import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SetToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem("token", action.payload);
    },
  },
});

export const { SetToken } = AuthSlice.actions;
export default AuthSlice.reducer;
