import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@features/cart/cartSlice';
// import checkoutReducer from '@features/checkout/checkoutSlice';
// import productReducer from '@features/product/productSlice';
// import userReducer from '@features/user/userSlice';
import { loadFromStorage, saveToStorage } from '@utils/localStorage';
import bestSellersReducer from '@features/products/bestSellersSlice';
import productListReducer from '@features/products/productListSlice';
import productReducer from '@features/products/productSlice';
import typesReducer from '@features/catalog/typesSlice';

const preloadedState = loadFromStorage('state');

const store = configureStore({
  reducer: {
    cart: cartReducer,
    productList: productListReducer,
    bestSellers: bestSellersReducer,
    product: productReducer,
    types: typesReducer,

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
