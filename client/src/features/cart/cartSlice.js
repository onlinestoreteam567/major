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
      if (newItem) {
        const existingItem = state.items.find((el) => el.id === newItem.id);
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.items.push({ ...newItem, quantity: 1 });
        }
      }
    },

    addItemWithQuantity: (state, action) => {
      console.log('add');

      const { item, quantity } = action.payload;
      if (item && quantity > 0) {
        console.log('item && quantity > 0');
        const existingItem = state.items.find((el) => el.id === item.id);
        if (existingItem) {
          console.log('existingItem');
          existingItem.quantity += quantity;
        } else {
          console.log('else');
          state.items.push({ ...item, quantity: quantity });
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
        existingItem.quantity -= 1;
      } else if (existingItem && existingItem.quantity === 1) {
        existingItem.quantity = 1;
      }
    },

    // Set item quantity directly
    setItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity = parseInt(quantity, 10) || 0;
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, addItemWithQuantity, removeItem, decrementItemQuantity, setItemQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
