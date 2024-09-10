import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import App from './App.jsx'
import store from './config/store';
import './index.css'
import './components/UI/Dropdown/Dropdown.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
        <App />
    </Provider>,
  </StrictMode>,
)
