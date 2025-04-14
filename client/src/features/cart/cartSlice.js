import { getProductsByIds } from '@redux/products/service';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  savedIds: [],
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;

  const fetchedProducts = action.payload;
  state.items = fetchedProducts.map((product) => {
    const savedItem = state.savedIds.find((saved) => saved.id === product.id);

    return {
      ...product,
      quantity: savedItem ? savedItem.quantity : 1,
    };
  });
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      if (newItem) {
        const existingItem = state.savedIds.find((el) => el.id === newItem);
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.savedIds.push({ id: newItem, quantity: 1 });
        }
      }
    },

    addItemWithQuantity: (state, action) => {
      const { item, quantity } = action.payload;
      if (item && quantity > 0) {
        const existingItem = state.savedIds.find((el) => el.id === item.id);
        if (existingItem) {
          existingItem.quantity += quantity;
        } else {
          state.savedIds.push({ ...item, quantity: quantity });
        }
      }
    },

    removeItem: (state, action) => {
      const itemId = action.payload;
      if (itemId) {
        state.savedIds = state.savedIds.filter((item) => item.id !== itemId);
        state.items = state.items.filter((item) => item.id !== itemId);
      }
    },
    incrementItemQuantity: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);
      const existingSavedItem = state.savedIds.find((item) => item.id === itemId);

      if (existingItem && existingSavedItem) {
        existingItem.quantity += 1;
        existingSavedItem.quantity += 1;
      }
    },
    decrementItemQuantity: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.items.find((item) => item.id === itemId);
      const existingSavedItem = state.savedIds.find((item) => item.id === itemId);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        existingSavedItem.quantity -= 1;
      } else if (existingItem && existingItem.quantity === 1) {
        existingItem.quantity = 1;
        existingSavedItem.quantity = 1;
      }
    },
    setItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      const existingSavedItem = state.savedIds.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity = parseInt(quantity, 10) || 1;
        existingSavedItem.quantity = parseInt(quantity, 10) || 1;
      }
    },

    clearCart: (state) => {
      state.savedIds = [];
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductsByIds.pending, handlePending);
    builder.addCase(getProductsByIds.fulfilled, handleFulfilled);
    builder.addCase(getProductsByIds.rejected, handleRejected);
  },
});

export const {
  addItem,
  addItemWithQuantity,
  removeItem,
  decrementItemQuantity,
  setItemQuantity,
  clearCart,
  incrementItemQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
