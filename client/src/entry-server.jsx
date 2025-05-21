import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { StrictMode } from 'react';
import { store } from './config/store.js';
import { Provider } from 'react-redux';
import { fetchBestSellers } from './redux/products/service';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

export async function render(url) {
  await i18n.use(initReactI18next).init({
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
    interpolation: {
      escapeValue: false,
    },
    // Set debug to true temporarily if you want to see i18next loading logs on server
    // debug: true,
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
