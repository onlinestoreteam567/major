import axios from 'axios';
import i18n from 'i18next';

// Check if the environment variable is defined
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
if (!API_BASE_URL) {
  console.error('API_BASE_URL is not defined! Check the configuration in the .env file.');
}

// Axios instance with base settings
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Dynamically set the Accept-Language header
const defaultLanguage = 'ua';
apiClient.interceptors.request.use(
  (config) => {
    config.headers['Accept-Language'] = i18n.language || defaultLanguage;

    // const username = 'admin@gmail.com';
    // const password = 'admin';
    // const base64Credentials = btoa(`${username}:${password}`);
    // config.headers['Authorization'] = `Basic ${base64Credentials}`;

    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.request.use(
  (config) => {
    let accessToken = localStorage.getItem('accessToken');

    if (window.location.href.includes('/admin')) {
      if (accessToken && accessToken.trim() !== '' && accessToken !== 'null') {
        accessToken = accessToken.replace(/^"(.*)"$/, '$1');
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      } else {
        console.log('Token is invalid or missing, no token sent for /admin');
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error('API Error:', {
        status: error.response.status,
        data: error.response.data,
        url: error.config?.url,
        method: error.config?.method,
      });

      switch (error.response.status) {
        case 401:
          console.warn('Unauthorized access - consider redirecting to login.');
          break;
        case 404:
          console.warn('Resource not found:', error.config?.url);
          break;
        case 500:
          console.error('Internal Server Error on:', error.config?.url);
          break;
        default:
          console.warn('Unhandled error status:', error.response.status);
      }
    } else if (error.request) {
      // Handle network errors (request made but no response received)
      console.error('Network Error:', error.message);
    } else {
      // Handle unexpected errors during request setup
      console.error('Unexpected Error:', error.message);
    }

    return Promise.reject(error); // Pass the error for further handling
  }
);

export default apiClient;
