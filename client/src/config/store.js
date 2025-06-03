import cartReducer from '@features/cart/cartSlice';
import { bannerByIdReducer } from '@redux/banner/bannerByIdSlice';
import { bannerCreateReducer } from '@redux/banner/bannerCreateSlice';
import { bannerDeleteReducer } from '@redux/banner/bannerDeleteSlice';
import { bannerEditReducer } from '@redux/banner/bannerEditSlice';
import { bannerReducer } from '@redux/banner/bannerSlice';
import { filterReducer } from '@redux/filter/filterSlice';
import { settlementsReducer } from '@redux/novaPost/settlementsSlice';
import { warehousesReducer } from '@redux/novaPost/warehousesSlice';
import { categotyReducer } from '@redux/params/categorySlice';
import { typesReducer } from '@redux/params/purposeSlice';
import { partnerCreateReducer } from '@redux/partners/partnerCreateSlice';
import { partnerDeleteReducer } from '@redux/partners/partnerDeleteSlice';
import { partnersReducer } from '@redux/partners/partnerSlice';
import { bestSellerReducer } from '@redux/products/bestSlice';
import { productIdReducer } from '@redux/products/cardSlice';
import { fitCategoryReducer } from '@redux/products/fitCategorySlice';
import { productsReducer } from '@redux/products/listSlice';
import { searchReducer } from '@redux/products/searchSlice';
import { setsReducer } from '@redux/products/setsSlice';
import { viewedProductsReducer } from '@redux/products/viewedProductsSlice';
import { promocodeReducer } from '@redux/promocode/promocodeSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { loadFromStorage, saveToStorage } from '@utils/localStorage';
import { authReducer } from '../admin/redux/authSlice';
import { createProductReducer } from '../admin/redux/createProductSlice';
import { createPurposeCategoryReducer } from '../admin/redux/createPurposeCategorySlice';
import { createTypeCategoryReducer } from '../admin/redux/createTypeCategorySlice';
import { editProductReducer } from '../admin/redux/editProductSlice';
import { productDeleteReducer } from '../admin/redux/productDeleteSlice';
import { promocodeByIdReducer } from '../admin/redux/promocodeByIdSlice';
import { promocodeCreateReducer } from '../admin/redux/promocodeCreateSlice';
import { promocodeDeleteReducer } from '../admin/redux/promocodeDeleteSlice';
import { promocodeEditReducer } from '../admin/redux/promocodeEditSlice';
import { promocodeListReducer } from '../admin/redux/promocodeListSlice';
import { purposeCategoryByIdReducer } from '../admin/redux/purposeCategoryByIdSlice';
import { purposeDeleteReducer } from '../admin/redux/purposeDeleteSlice';
import { purposeEditReducer } from '../admin/redux/purposeEditSlice';
import { typeByIdReducer } from '../admin/redux/typeByIdSlice';
import { typeDeleteReducer } from '../admin/redux/typeDeleteSlice';
import { typeEditReducer } from '../admin/redux/typeEditSlice';
import { reviewReducer } from '../redux/reviews/reviewsSlice';
import { uploadImageReducer } from '@redux/blogs/uploadImageSlice';
import { partnerByIdReducer } from '@redux/partners/partnerByIdSlice';
import { partnerEditReducer } from '@redux/partners/partnerEditSlice';
import { addReviewReducer } from '@redux/reviews/addReviewReducer';

const preloadedState = {
  cart: loadFromStorage('cart') || undefined,
  auth: {
    accessToken: loadFromStorage('accessToken') || null,
    refreshToken: loadFromStorage('refreshToken') || null,
  },
  viewedProducts: {
    viewedProducts: loadFromStorage('viewedProducts') || [],
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
  viewedProducts: viewedProductsReducer,
  settlements: settlementsReducer,
  warehouses: warehousesReducer,

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
  reviews: reviewReducer,
  addReview: addReviewReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
  devTools: 'process.env.NODE_ENV' !== 'production',
  preloadedState,
});

store.subscribe(() => {
  const { cart, auth, viewedProducts } = store.getState();
  saveToStorage('cart', cart);
  saveToStorage('accessToken', auth.accessToken);
  saveToStorage('refreshToken', auth.refreshToken);
  saveToStorage('viewedProducts', viewedProducts.viewedProducts);
});
