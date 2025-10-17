// store.js

// Static Reducer Imports (These are bundled with the main application)
import { cartReducer } from '@redux/cart/cartSlice';
import { setsReducer } from '@redux/products/setsSlice';
import { productsReducer } from '@redux/products/listSlice';
import { productIdReducer } from '@redux/products/cardSlice';
import { bestSellerReducer } from '@redux/products/bestSlice';
import { categotyReducer } from '@redux/params/categorySlice';
import { typesReducer } from '@redux/params/purposeSlice';
import { fitCategoryReducer } from '@redux/products/fitCategorySlice';
import { filterReducer } from '@redux/filter/filterSlice';
import { searchReducer } from '@redux/products/searchSlice';
import { promocodeReducer } from '@redux/promocode/promocodeSlice';
import { bannerReducer } from '@redux/banner/bannerSlice';
import { viewedProductsReducer } from '@redux/products/viewedProductsSlice';
import { settlementsReducer } from '@redux/novaPost/settlementsSlice';
import { warehousesReducer } from '@redux/novaPost/warehousesSlice';
import { partnersReducer } from '@redux/partners/partnerSlice';
import { authReducer } from '@redux/admin/auth/authSlice';
import { verifyTokenReducer } from '@redux/admin/auth/verifyTokenSlice';
import { contactsReducer } from '@redux/contacts/contactsSlice';
import { reviewReducer } from '@redux/reviews/reviewsSlice';

// Core Redux Toolkit and Utilities
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { loadFromStorage, saveToStorage } from '@utils/localStorage';

// Initial state loaded from local storage
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

// Define the reducers that will always be present
const staticReducers = {
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
  viewedProducts: viewedProductsReducer,
  settlements: settlementsReducer,
  warehouses: warehousesReducer,
  partners: partnersReducer,
  auth: authReducer,
  verifyToken: verifyTokenReducer,
  contacts: contactsReducer,
  reviews: reviewReducer,
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

/**
 * Injects multiple reducers at once and replaces the store's root reducer.
 * @param {Object} reducersMap An object where keys are the state path and values are the reducer functions.
 */
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
