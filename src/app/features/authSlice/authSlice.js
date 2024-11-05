import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SetToken: (state, action) => {
      const token = action.payload;
      state.token = token;
    },
  },
});

export const { SetToken } = AuthSlice.actions;
export default AuthSlice.reducer;
