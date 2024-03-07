// CartSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Load cart items from local storage
const getCartItems = () => {
  const cartItems = localStorage.getItem("cart");
  return cartItems ? JSON.parse(cartItems) : [];
};

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: getCartItems(),
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      // Update local storage
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item !== action.payload);
      // Update local storage
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    clearCart: (state, action) => {
      state.items = [];
      // Clear local storage
      localStorage.removeItem("cart");
    },
  }
});

export const { addItem, removeItem, clearCart } = CartSlice.actions;

export default CartSlice.reducer;
