import { configureStore } from "@reduxjs/toolkit";
import LoadingSlice from "./features/loading/loading";
import AuthSlice from "./features/authSlice/authSlice";
import DataGridSlice from "./features/data/DataGridSlice";

export const store = configureStore({
  reducer: {
    loading: LoadingSlice,
    auth: AuthSlice,
    data: DataGridSlice,
  },
});
