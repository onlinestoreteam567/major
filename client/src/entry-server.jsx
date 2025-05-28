// render.js
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { StrictMode } from 'react';
import { store } from './config/store.js';
import { Provider } from 'react-redux';
import { fetchBestSellers } from './redux/products/service';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-fs-backend'; // Import i18next-fs-backend
import path from 'path'; // Node.js path module

export async function render(url) {
  // Determine the absolute path to your locales directory
  // Adjust this path based on your project structure.
  // Assuming 'public/locales' relative to your server entry file.
  const localesPath = path.resolve(process.cwd(), 'public', 'locales');

  await i18n
    .use(Backend) // Use fs-backend for server-side
    .use(initReactI18next)
    .init({
      debug: true, // Keep for debugging
      fallbackLng: 'ua',
      lng: 'ua',
      ns: [
        'common',
        'header',
        'footer',
        'catalogPage',
        'yellowButton',
        'buttonClose',
        'buttonAriaLable',
        'mainBanner',
        'majorInfo',
        'whyChooseUs',
        'ourPartners',
        'basket',
        'search',
        'card',
      ],
      defaultNS: 'common',
      backend: {
        loadPath: path.join(localesPath, '{{lng}}', '{{ns}}.json'),
      },
      interpolation: {
        escapeValue: false,
      },
    });

  // Dispatch the fetchBestSellers action and wait for it to complete
  await store.dispatch(fetchBestSellers());

  console.log('rerender server');

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
