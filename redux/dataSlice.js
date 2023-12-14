// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    productid: "",
    productobjectarray: [],
    productobject: {},
  },
  reducers: {
    productId: (state, action) => {
      state.productid = action.payload;
    },
    productObject: (state, action) => {
      state.productobject = action.payload;
    },
    productObjectarray: (state, action) => {
      state.productobjectarray.push(action.payload);
    },
    productObjectarrayremove: (state, action) => {
      state.productobjectarray = state.productobjectarray.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const {
  productId,
  productObjectarray,
  productObject,
  productObjectarrayremove,
} = dataSlice.actions;
export default dataSlice.reducer;
