import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { ammount: 0, isOpened: false },
  reducers: {
    increment(state) {
      state.ammount++;
    },
    decrement(state) {
      state.ammount--;
    },
    toggleCart(state) {
      state.isOpened = !state.isOpened;
    },
  },
});

const store = configureStore({
  reducer: { cart: cartSlice.reducer },
});

export const cartActions = cartSlice.actions;
export default store;
