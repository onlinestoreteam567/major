import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from '@features/cart/cartSlice';
import { loadFromStorage, saveToStorage } from '@utils/localStorage';
import { setsReducer } from '@redux/products/setsSlice';
import { productsReducer } from '@redux/products/listSlice';
import { productIdReducer } from '@redux/products/cardSlice';
import { bestSellerReducer } from '@redux/products/bestSlice';
import { categotyReducer } from '@redux/params/categorySlice';
import { typesReducer } from '@redux/params/purposeSlice';
import { fitCategoryReducer } from '@redux/products/fitCategorySlice';
import { filterReducer } from '@redux/filter/filterSlice';

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
  fitCategory: fitCategoryReducer,
  filter: filterReducer,
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
