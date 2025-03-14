import axios from 'axios';
import i18n from 'i18next';
import { fetchAuthToken } from '../admin/redux/service';
import { clearTokens } from '../admin/redux/authSlice';

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
    return config;
  },
  (error) => Promise.reject(error)
);

// Add Authorization header with Bearer token for requests to /admin path except for the refresh token endpoint
apiClient.interceptors.request.use(
  (config) => {
    // Don't add Authorization header for the refresh token endpoint
    if (config.url.includes('/auth/token/refresh/')) {
      delete config.headers['Authorization'];
    } else {
      let accessToken = localStorage.getItem('accessToken');

      // Only add Authorization header for /admin path
      if (window.location.href.includes('/admin')) {
        if (accessToken && accessToken.trim() !== '' && accessToken !== 'null') {
          // Remove quotes from the token
          accessToken = accessToken.replace(/^"(.*)"$/, '$1');
          config.headers['Authorization'] = `Bearer ${accessToken}`;
        } else {
          console.log('Token is invalid or missing, no token sent for /admin');
        }
      }
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Queue to store pending requests while token refresh is in progress
let isRefreshing = false;
let refreshSubscribers = [];

const onRefreshed = (accessToken) => {
  refreshSubscribers.forEach((callback) => callback(accessToken));
};

const addRefreshSubscriber = (callback) => {
  refreshSubscribers.push(callback);
};

// Handle expired access tokens by refreshing them using the refresh token. If the refresh token is also invalid, log the user out.
apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      // Prevent multiple refresh token requests at the same time
      if (isRefreshing) {
        return new Promise((resolve) => {
          addRefreshSubscriber((accessToken) => {
            originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
            resolve(apiClient(originalRequest)); // Retry the request with new access token
          });
        });
      }

      isRefreshing = true;

      try {
        const { store } = await import('./store');
        const { refreshToken } = store.getState().auth;
        const response = await apiClient.post('/auth/token/refresh/', { refresh: refreshToken });
        store.dispatch(fetchAuthToken.fulfilled(response.data));

        // Store the new access token
        const newAccessToken = response.data.access;

        // Update the queued requests with the new token
        onRefreshed(newAccessToken);

        // Add the new access token to the original request
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

        isRefreshing = false;

        // Replay the original request with the new access token
        return apiClient(originalRequest);
      } catch (refreshError) {
        // If the refresh token is also invalid, log the user out
        const { store } = await import('./store');
        store.dispatch(clearTokens());
        isRefreshing = false;
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

// Logging and network error handling
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
