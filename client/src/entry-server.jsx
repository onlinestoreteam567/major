import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { StrictMode } from 'react';

export async function render(url) {
  const rendered = renderToString(
    <StrictMode>
      <StaticRouter location={url.startsWith('/') ? url : '/' + url}>
        <App />
      </StaticRouter>
    </StrictMode>
  );

  return {
    html: rendered,
  };
}
