import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      // Validate that item has required properties
      if (newItem) {
        const existingItem = state.items.find((el) => el.id === newItem.id);
        if (existingItem) {
          // If item exists, update the quantity
          existingItem.quantity += newItem.quantity;
        } else {
          // If item doesn't exist, add it
          state.items.push(newItem);
        }
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      // Ensure the payload is valid before attempting to remove
      if (itemId) {
        state.items = state.items.filter((item) => item.id !== itemId);
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
