import axios from 'axios';
import { logApiError } from './lib/logApiError';

// Check if the environment variable is defined
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
if (!API_BASE_URL) {
  console.error('API_BASE_URL is not defined! Check the configuration in the .env file.');
}

// Axios instance with base settings
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const username = import.meta.env.VITE_API_USERNAME;
const password = import.meta.env.VITE_API_PASSWORD;

if (!username || !password) {
  console.error('VITE_API_PASSWORD and VITE_API_USERNAME is not defined! Check the configuration in the .env file.');
}

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
