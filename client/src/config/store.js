import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from '@features/cart/cartSlice';
import { loadFromStorage, saveToStorage } from '@utils/localStorage';
import { setsReducer } from '@redux/products/setsSlice';
import { productsReducer } from '@redux/products/listSlice';
import { productIdReducer } from '@redux/products/cardSlice';
import { bestSellerReducer } from '@redux/products/bestSlice';
import { categotyReducer } from '@redux/params/categorySlice';
import { typesReducer } from '@redux/params/purposeSlice';

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
