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
  // timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Dynamically set the Accept-Language header
const defaultLanguage = 'ua';
apiClient.interceptors.request.use(
  (config) => {
    config.headers['Accept-Language'] = i18n.language || defaultLanguage;
    return config;
  },
  (error) => Promise.reject(error)
);

const username = 'admin@gmail.com';
const password = 'admin';

apiClient.defaults.headers.common['Authorization'] = `Basic ${btoa(`${username}:${password}`)}`;

apiClient.interceptors.request.use(
  (config) => {
    // example for future code
    // const token = localStorage.getItem('token');
    // if (token) {
    //     config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    logApiError(error);

    return Promise.reject(error); // Pass the error for further handling
  }
);

export default apiClient;
