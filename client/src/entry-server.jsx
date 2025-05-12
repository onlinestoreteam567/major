import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import fs from 'fs/promises'; // Or your preferred file system module
import path from 'path';

export async function render(url) {
  const rendered = renderToString(
    <StrictMode>
      <p>123</p>
    </StrictMode>
  );
  console.log('Server-rendered HTML:', rendered);

  // Read your index.html file
  const indexHTML = await fs.readFile(path.resolve('./index.html'), 'utf-8');

  // Inject the server-rendered HTML into the root div
  const htmlWithRoot = indexHTML.replace('<div id="root"></div>', `<div id="root">${rendered}</div>`);

  return {
    html: htmlWithRoot,
  };
}
