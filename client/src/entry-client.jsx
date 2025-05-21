import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './config/store.js';

// Check for preloaded state from the server
const preloadedState = window.__PRELOADED_STATE__;

// If there's preloaded state, replace the initial state in the store
if (preloadedState) {
  store.replaceReducer(() => preloadedState); // A simple way to hydrate the store
  delete window.__PRELOADED_STATE__; // Clean up the global variable
}
console.log('rerender client');

ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
