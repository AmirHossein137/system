import { configureStore } from "@reduxjs/toolkit";
import LoadingSlice from "./features/loading/loading";
import AuthSlice from "./features/authSlice/authSlice";

export const store = configureStore({
  reducer: {
    loading: LoadingSlice,
    auth: AuthSlice,
  },
});
