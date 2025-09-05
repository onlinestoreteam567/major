import { clearTokens } from '@redux/admin/auth/authSlice';
import { fetchAuthToken } from '@redux/admin/auth/service';
import axios from 'axios';

// State for the token refresh queue
let isRefreshing = false;
let refreshSubscribers = [];

const onRefreshed = (accessToken) => {
  refreshSubscribers.forEach((callback) => callback(accessToken));
  refreshSubscribers = [];
};

const addRefreshSubscriber = (callback) => {
  refreshSubscribers.push(callback);
};

// Check if environment variables are defined
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
if (!API_BASE_URL) {
  console.error('API_BASE_URL is not defined!');
}

const VITE_AUTH_TOKEN_ENDPOINT = import.meta.env.VITE_AUTH_TOKEN_ENDPOINT;
if (!VITE_AUTH_TOKEN_ENDPOINT) {
  console.error('VITE_AUTH_TOKEN_ENDPOINT is not defined!');
}

export const applyResponseAuthInterceptor = (apiClient) => {
  apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
      // Check for a 401 error and ensure it's not a retry request
      const originalRequest = error.config;
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        // If a refresh is already in progress, add the current request to the queue
        if (isRefreshing) {
          return new Promise((resolve) => {
            addRefreshSubscriber((accessToken) => {
              originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
              resolve(apiClient(originalRequest));
            });
          });
        }

        isRefreshing = true;

        try {
          const { store } = await import('../../../store');
          const { refreshToken } = store.getState().auth;

          if (!refreshToken) {
            store.dispatch(clearTokens());
            isRefreshing = false;
            return Promise.reject(error);
          }

          // Use a separate Axios instance to avoid interceptor loops
          const refreshClient = axios.create({
            baseURL: API_BASE_URL,
            headers: { 'Content-Type': 'application/json' },
          });

          const response = await refreshClient.post(`${VITE_AUTH_TOKEN_ENDPOINT}refresh/`, { refresh: refreshToken });
          store.dispatch(fetchAuthToken.fulfilled(response.data));

          const newAccessToken = response.data.access;
          onRefreshed(newAccessToken);

          originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          isRefreshing = false;
          return apiClient(originalRequest);
        } catch (refreshError) {
          const { store } = await import('../../../store');
          store.dispatch(clearTokens());
          isRefreshing = false;
          window.location.href = '/admin/login';
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    }
  );
};
