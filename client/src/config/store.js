import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { loadFromStorage, saveToStorage } from '@utils/localStorage';
import { cartReducer } from '@redux/cart/cartSlice';
import { authReducer } from '@redux/admin/auth/authSlice';
import { verifyTokenReducer } from '@redux/admin/auth/verifyTokenSlice';
import { contactsReducer } from '@redux/contacts/contactsSlice';
import { viewedProductsReducer } from '@redux/products/viewedProductsSlice';

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
  cart: cartReducer,
  viewedProducts: viewedProductsReducer,
  auth: authReducer,
  verifyToken: verifyTokenReducer,
  contacts: contactsReducer,
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
