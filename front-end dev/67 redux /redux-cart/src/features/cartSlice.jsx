import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
  name: "cart",

  initialState: {
    cartItem: [],
  },

  reducers: {
    addToCart: (state, action) => {

      let existingItem = state.cartItem.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItem.push({ ...action.payload, quantity: 1 });
      }
    },
    decreaseQuantity: (state, action) => {
      let existingItem = state.cartItem.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.quantity -= 1;
        if (existingItem.quantity <= 0) {
          state.cartItem = state.cartItem.filter(
            (item) => item.id !== action.payload.id,
          );
        }
      }
    },
    removeFromCart: (state, action) => {
      state.cartItem = state.cartItem.filter(
        (item) => item.id !== action.payload,
      );
    },
  },
});

export let { addToCart, decreaseQuantity, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
