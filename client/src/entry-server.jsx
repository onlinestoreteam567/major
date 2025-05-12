import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { StrictMode } from 'react';
import { store } from './config/store.js';
import { Provider } from 'react-redux';
import { fetchBestSellers } from './redux/products/service'; // Import the action creator

export async function render(url) {
  // Dispatch the fetchBestSellers action and wait for it to complete
  await store.dispatch(fetchBestSellers());

  const rendered = renderToString(
    <StrictMode>
      <Provider store={store}>
        <StaticRouter location={url.startsWith('/') ? url : '/' + url}>
          <App />
        </StaticRouter>
      </Provider>
    </StrictMode>
  );

  // Get the final state of the store after the data has been fetched
  const preloadedState = store.getState();

  return {
    html: rendered,
    head: `<script>window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}</script>`,
  };
}
