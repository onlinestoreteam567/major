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
          // If item exists, increment the quantity by 1
          existingItem.quantity += 1;
        } else {
          // If item doesn't exist, add it with a quantity of 1
          state.items.push({ ...newItem, quantity: 1 });
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

    decrementItemQuantity: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1; // Decrease the quantity by 1 if it's greater than 1
      } else if (existingItem && existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== itemId); // Remove item if quantity reaches 0
      }
    },

    // Set item quantity directly
    setItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem && quantity >= 1) {
        existingItem.quantity = quantity;
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, decrementItemQuantity, setItemQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
