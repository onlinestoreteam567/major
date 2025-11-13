import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { loadFromStorage, saveToStorage } from '@utils/localStorage';
import { cartReducer } from '@redux/cart/cartSlice';
import { authReducer } from '@redux/admin/auth/authSlice';
import { verifyTokenReducer } from '@redux/admin/auth/verifyTokenSlice';
import { contactsReducer } from '@redux/contacts/contactsSlice';
import { viewedProductsReducer } from '@redux/products/viewedProductsSlice';
import { productIdReducer } from '@redux/products/cardSlice';
import { setsReducer } from '@redux/products/setsSlice';
import { fitCategoryReducer } from '@redux/products/fitCategorySlice';
import { addReviewReducer } from '@redux/reviews/addReviewSlice';
import { bestSellerReducer } from '@redux/products/bestSlice';
import { categoryReducer } from '@redux/params/categorySlice';
import { filterReducer } from '@redux/filter/filterSlice';
import { bannerReducer } from '@redux/banner/bannerSlice';
import { partnersReducer } from '@redux/partners/partnerSlice';
import { reviewReducer } from '@redux/reviews/reviewsSlice';
import { typesReducer } from '@redux/params/purposeSlice';
import { productsReducer } from '@redux/products/listSlice';
import { promocodeReducer } from '@redux/promocode/promocodeSlice';
import { settlementsReducer } from '@redux/novaPost/settlementsSlice';
import { warehousesReducer } from '@redux/novaPost/warehousesSlice';
import { createInvoiceReducer } from '@redux/checkout/createInvoiceSlice';
import { checkInvoiceStatusReducer } from '@redux/checkout/checkInvoiceStatusSlice';

const preloadedState = {
  cart: loadFromStorage('cart') || undefined,
  auth: {
    accessToken: loadFromStorage('accessToken') || null,
    refreshToken: loadFromStorage('refreshToken') || null,
    role: loadFromStorage('role') || null,
  },
  viewedProducts: {
    viewedProducts: loadFromStorage('viewedProducts') || [],
  },
};

// Reducers that will always be present
const staticReducers = {
  // product reducers
  productId: productIdReducer,
  sets: setsReducer,
  fitCategory: fitCategoryReducer,
  addReview: addReviewReducer,

  // default reducers
  cart: cartReducer,
  viewedProducts: viewedProductsReducer,
  auth: authReducer,
  verifyToken: verifyTokenReducer,
  contacts: contactsReducer,

  // Home page slices
  bests: bestSellerReducer,
  category: categoryReducer,
  filter: filterReducer,
  banner: bannerReducer,
  partners: partnersReducer,
  reviews: reviewReducer,

  // catalog
  types: typesReducer,
  products: productsReducer,

  // checkoutPage
  promocode: promocodeReducer,
  settlements: settlementsReducer,
  warehouses: warehousesReducer,
  createInvoice: createInvoiceReducer,
  checkInvoiceStatus: checkInvoiceStatusReducer,
};

// Function to create the combined reducer
function createReducer(asyncReducers = {}) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers,
  });
}

// Configure the store with only static reducers initially
export const store = configureStore({
  reducer: createReducer(),
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
  devTools: 'process.env.NODE_ENV' !== 'production',
  preloadedState,
});

// Attach async reducers dictionary to the store instance
store.asyncReducers = {};

export const injectReducers = (reducersMap) => {
  let newReducersInjected = false;

  // Add new reducers to the asyncReducers dictionary
  Object.entries(reducersMap).forEach(([key, reducer]) => {
    if (reducer && !store.asyncReducers[key]) {
      store.asyncReducers[key] = reducer;
      newReducersInjected = true;
    }
  });

  if (newReducersInjected) {
    // Replace the reducer once after all new reducers are added
    store.replaceReducer(createReducer(store.asyncReducers));
    console.log(`Injected ${Object.keys(reducersMap).length} async reducers.`);
  }
};

// Store subscription logic to save state to local storage
store.subscribe(() => {
  const { cart, auth, viewedProducts } = store.getState();
  saveToStorage('cart', cart);
  saveToStorage('accessToken', auth.accessToken);
  saveToStorage('refreshToken', auth.refreshToken);
  saveToStorage('role', auth.role);
  saveToStorage('viewedProducts', viewedProducts.viewedProducts);
});
