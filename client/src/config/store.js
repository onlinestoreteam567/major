import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from '@features/cart/cartSlice';
// import bestSellersReducer from '@features/products/bestSellersSlice';
// import setsReducer from '@features/products/setsSlice';
// import productListReducer from '@features/products/productListSlice/productListSlice';
// import productsReducer from '@features/products/productSlice';
// import typesReducer from '@features/catalog/typesSlice';
// import purposeCategoryReducer from '@features/catalog/purposeCategorySlice';
import { loadFromStorage, saveToStorage } from '@utils/localStorage';

import { bestSellerReducer } from '../redax/products/bestSlice';
import { productsReducer } from '../redax/products/listSlice';
import { categotyReducer } from '../redax/params/categorySlice';
import { typesReducer } from '../redax/params/purposeSlice';
import { setsReducer } from '../redax/products/setsSlice';
import { productIdReducer } from '../redax/products/cardSlise';

const preloadedState = {
  cart: loadFromStorage('cart') || undefined,
};

const rootReducer = combineReducers({
  cart: cartReducer,
  sets: setsReducer,
  products: productsReducer,
  productId: productIdReducer,
  bests: bestSellerReducer,
  category: categotyReducer,
  types: typesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
  devTools: 'process.env.NODE_ENV' !== 'production',
  preloadedState,
});

store.subscribe(() => {
  const { cart } = store.getState();
  saveToStorage('cart', cart);
});

// const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//     // productList: productsReducer,
//     // bestSellers: bestSellersReducer,
//     sets: setsReducer,
//     products: productsReducer,
//     bestSellers: bestSellerReducer,
//     category: categotyReducer,
//     types: typesReducer,
//   },
//   preloadedState,
// });

// Save only the cart slice when it changes

// export default store;
