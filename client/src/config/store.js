import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@features/cart/cartSlice';
import catalogPageReducer from '@features/catalogPage/catalogPageSlice';
// import checkoutReducer from '@features/checkout/checkoutSlice';
// import productReducer from '@features/product/productSlice';
// import userReducer from '@features/user/userSlice';
import { loadFromStorage, saveToStorage } from '@utils/localStorage';

const preloadedState = loadFromStorage('state');

const store = configureStore({
  reducer: {
    cart: cartReducer,
    catalogPage: catalogPageReducer,
    // checkout: checkoutReducer,
    // product: productReducer,
    // user: userReducer,
  },
  preloadedState, // Load state from localStorage if available
});

// Save the state to localStorage whenever it changes
store.subscribe(() => {
  saveToStorage('state', store.getState());
});

export default store;
