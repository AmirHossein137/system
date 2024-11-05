import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};

const dataGridSlice = createSlice({
  name: "DataGrid",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = dataGridSlice.actions;
export default dataGridSlice.reducer;
