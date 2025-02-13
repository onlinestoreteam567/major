import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@features/cart/cartSlice';
import bestSellersReducer from '@features/products/bestSellersSlice';
import setsReducer from '@features/products/setsSlice';
import productListReducer from '@features/products/productListSlice/productListSlice';
import productReducer from '@features/products/productSlice';
import typesReducer from '@features/catalog/typesSlice';
import purposeCategoryReducer from '@features/catalog/purposeCategorySlice';
import { loadFromStorage, saveToStorage } from '@utils/localStorage';

const preloadedState = {
  cart: loadFromStorage('cart') || undefined,
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
    productList: productListReducer,
    bestSellers: bestSellersReducer,
    sets: setsReducer,
    product: productReducer,
    purposeCategory: purposeCategoryReducer,
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
