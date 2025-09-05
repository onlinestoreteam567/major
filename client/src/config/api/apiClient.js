import axios from 'axios';
import { applyLanguageInterceptor } from './interceptors/request/language';
import { applyAuthInterceptor } from './interceptors/request/auth';
import { applyResponseAuthInterceptor } from './interceptors/response/auth';
import { applyErrorLoggerInterceptor } from './interceptors/response/errorLogger';

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

// Request interceptors
applyLanguageInterceptor(apiClient);
applyAuthInterceptor(apiClient);

// Response interceptors
applyResponseAuthInterceptor(apiClient);
applyErrorLoggerInterceptor(apiClient);

export default apiClient;
