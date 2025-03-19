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
import { searchReducer } from '@redux/products/searchSlice';

import { authReducer } from '../admin/redux/authSlice';
import { createProductReducer } from '../admin/redux/createProductSlice';
import { editProductReducer } from '../admin/redux/editProductSlice';
import { createPurposeCategoryReducer } from '../admin/redux/createPurposeCategorySlice';
import { createTypeCategoryReducer } from '../admin/redux/createTypeCategorySlice';
import { purposeCategoryByIdReducer } from '../admin/redux/purposeCategoryByIdSlice';
import { purposeEditReducer } from '../admin/redux/purposeEditSlice';

const preloadedState = {
  cart: loadFromStorage('cart') || undefined,
  auth: {
    accessToken: loadFromStorage('accessToken') || null,
    refreshToken: loadFromStorage('refreshToken') || null,
  },
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
  search: searchReducer,

  auth: authReducer,
  createProduct: createProductReducer,
  editProduct: editProductReducer,
  createPurposeCategory: createPurposeCategoryReducer,
  createTypeCategory: createTypeCategoryReducer,
  purposeCategoryById: purposeCategoryByIdReducer,
  purposeEdit: purposeEditReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
  devTools: 'process.env.NODE_ENV' !== 'production',
  preloadedState,
});

store.subscribe(() => {
  const { cart, auth } = store.getState();
  saveToStorage('cart', cart);
  saveToStorage('accessToken', auth.accessToken);
  saveToStorage('refreshToken', auth.refreshToken);
});
