// counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    productid: "",
    productobjectarray: [],
    productobjectarraycart: [],
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
    productObjectarraycart: (state, action) => {
      state.productobjectarraycart.push(action.payload);
    },
    productObjectarraycartadd: (state, action) => {
      state.productobjectarraycart = action.payload;
    },
    productObjectarraycartremove: (state, action) => {
      state.productobjectarraycart = state.productobjectarraycart.filter(
        (item) => item.id !== action.payload.id
      );
    },
    clearArraycart: (state, action) => {
      state.productobjectarraycart.splice(
        0,
        state.productobjectarraycart.length
      );
    },
  },
});

export const {
  productId,
  productObjectarray,
  productObjectarraycart,
  productObjectarraycartadd,
  productObject,
  productObjectarrayremove,
  productObjectarraycartremove,
  clearArraycart,
} = dataSlice.actions;
export default dataSlice.reducer;
