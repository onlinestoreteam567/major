import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@features/cart/cartSlice';
import bestSellersReducer from '@features/products/bestSellersSlice';
import productListReducer from '@features/products/productListSlice/productListSlice';
import productReducer from '@features/products/productSlice';
import typesReducer from '@features/catalog/typesSlice';
import { loadFromStorage, saveToStorage } from '@utils/localStorage';

const preloadedState = {
  cart: loadFromStorage('cart') || undefined,
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
    productList: productListReducer,
    bestSellers: bestSellersReducer,
    product: productReducer,
    types: typesReducer,
  },
  preloadedState,
});

// Save only the cart slice when it changes
store.subscribe(() => {
  const { cart } = store.getState();
  saveToStorage('cart', cart);
});

export default store;
