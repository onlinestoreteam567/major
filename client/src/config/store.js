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
import { authReducer } from '../redux/admin/auth/authSlice';
import { createProductReducer } from '../redux/admin/product/createProductSlice';
import { createPurposeCategoryReducer } from '../redux/admin/purpose/createPurposeCategorySlice';
import { createTypeCategoryReducer } from '../redux/admin/type/createTypeCategorySlice';
import { editProductReducer } from '../redux/admin/product/editProductSlice';
import { productDeleteReducer } from '../redux/admin/product/productDeleteSlice';
import { promocodeByIdReducer } from '../redux/admin/promocode/promocodeByIdSlice';
import { promocodeCreateReducer } from '../redux/admin/promocode/promocodeCreateSlice';
import { promocodeDeleteReducer } from '../redux/admin/promocode/promocodeDeleteSlice';
import { promocodeEditReducer } from '../redux/admin/promocode/promocodeEditSlice';
import { promocodeListReducer } from '../redux/admin/promocode/promocodeListSlice';
import { purposeCategoryByIdReducer } from '../redux/admin/purpose/purposeCategoryByIdSlice';
import { purposeDeleteReducer } from '../redux/admin/purpose/purposeDeleteSlice';
import { purposeEditReducer } from '../redux/admin/purpose/purposeEditSlice';
import { typeByIdReducer } from '../redux/admin/type/typeByIdSlice';
import { typeDeleteReducer } from '../redux/admin/type/typeDeleteSlice';
import { typeEditReducer } from '../redux/admin/type/typeEditSlice';
import { reviewReducer } from '../redux/reviews/reviewsSlice';
import { uploadImageReducer } from '@redux/blogs/uploadImageSlice';
import { partnerByIdReducer } from '@redux/partners/partnerByIdSlice';
import { partnerEditReducer } from '@redux/partners/partnerEditSlice';
import { addReviewReducer } from '@redux/reviews/addReviewReducer';
import { adminSearchReducer } from '@redux/admin/adminSearchSlice/adminSearchSlice';

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
  uploadImage: uploadImageReducer,
  partnerById: partnerByIdReducer,
  partnerEdit: partnerEditReducer,
  partners: partnersReducer,
  partnerDelete: partnerDeleteReducer,
  partnerCreate: partnerCreateReducer,

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
  adminSearch: adminSearchReducer,
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
