import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

ReactDOM.hydrateRoot(
  document.getElementById('root'),
  <StrictMode>
    <p>123</p>
  </StrictMode>,
  () => {
    console.log('Client-side hydrated HTML:', document.getElementById('root')?.innerHTML);
  }
);
