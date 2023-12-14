// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: { productid: "" },
  reducers: {
    productId: (state, action) => {
      state.productid = action.payload;
    },
  },
});

export const { productId } = dataSlice.actions;
export default dataSlice.reducer;
