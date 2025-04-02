import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from '@features/cart/cartSlice';
import { loadFromStorage, saveToStorage } from '@utils/localStorage';
import { setsReducer } from '@redux/products/setsSlice';
import { productsReducer } from '@redux/products/listSlice';
import { productIdReducer } from '@redux/products/cardSlice';
import { bestSellerReducer } from '@redux/products/bestSlice';
import { categotyReducer } from '@redux/params/categorySlice';
import { promocodeReducer } from '@redux/promocode/promocodeSlice';
import { typesReducer } from '@redux/params/purposeSlice';
import { fitCategoryReducer } from '@redux/products/fitCategorySlice';
import { filterReducer } from '@redux/filter/filterSlice';
import { searchReducer } from '@redux/products/searchSlice';
import { bannerReducer } from '@redux/banner/bannerSlice';
import { bannerDeleteReducer } from '@redux/banner/bannerDeleteSlice';
import { bannerCreateReducer } from '@redux/banner/bannerCreateSlice';
import { bannerByIdReducer } from '@redux/banner/bannerByIdSlice';
import { bannerEditReducer } from '@redux/banner/bannerEditSlice';

import { authReducer } from '../admin/redux/authSlice';
import { createProductReducer } from '../admin/redux/createProductSlice';
import { editProductReducer } from '../admin/redux/editProductSlice';
import { productDeleteReducer } from '../admin/redux/productDeleteSlice';
import { createPurposeCategoryReducer } from '../admin/redux/createPurposeCategorySlice';
import { createTypeCategoryReducer } from '../admin/redux/createTypeCategorySlice';
import { purposeCategoryByIdReducer } from '../admin/redux/purposeCategoryByIdSlice';
import { purposeEditReducer } from '../admin/redux/purposeEditSlice';
import { purposeDeleteReducer } from '../admin/redux/purposeDeleteSlice';
import { typeByIdReducer } from '../admin/redux/typeByIdSlice';
import { typeEditReducer } from '../admin/redux/typeEditSlice';
import { typeDeleteReducer } from '../admin/redux/typeDeleteSlice';
import { promocodeListReducer } from '../admin/redux/promocodeListSlice';
import { promocodeCreateReducer } from '../admin/redux/promocodeCreateSlice';
import { promocodeByIdReducer } from '../admin/redux/promocodeByIdSlice';
import { promocodeEditReducer } from '../admin/redux/promocodeEditSlice';
import { promocodeDeleteReducer } from '../admin/redux/promocodeDeleteSlice';

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
  promocode: promocodeReducer,
  banner: bannerReducer,
  bannerDelete: bannerDeleteReducer,
  bannerCreate: bannerCreateReducer,
  bannerById: bannerByIdReducer,
  bannerEdit: bannerEditReducer,

  auth: authReducer,
  createProduct: createProductReducer,
  editProduct: editProductReducer,
  productDelete: productDeleteReducer,
  createPurposeCategory: createPurposeCategoryReducer,
  createTypeCategory: createTypeCategoryReducer,
  purposeCategoryById: purposeCategoryByIdReducer,
  purposeEdit: purposeEditReducer,
  purposeDelete: purposeDeleteReducer,
  typeById: typeByIdReducer,
  typeEdit: typeEditReducer,
  typeDelete: typeDeleteReducer,
  promocodeList: promocodeListReducer,
  promocodeCreate: promocodeCreateReducer,
  promocodeById: promocodeByIdReducer,
  promocodeEdit: promocodeEditReducer,
  promocodeDelete: promocodeDeleteReducer,
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
