// interceptors/response/errorLogger.js

/**
 * Applies a general error logging and handling interceptor.
 * @param {import('axios').AxiosInstance} apiClient The Axios instance to apply the interceptor to.
 */
export const applyErrorLoggerInterceptor = (apiClient) => {
  apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response) {
        // Log details of the API error
        console.error('API Error:', {
          status: error.response.status,
          data: error.response.data,
          url: error.config?.url,
          method: error.config?.method,
        });

        // Handle specific HTTP status codes
        switch (error.response.status) {
          case 401:
            console.warn('Unauthorized access - potential token issue.');
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
        // Log network errors
        console.error('Network Error:', error.message);
      } else {
        // Log other unexpected errors
        console.error('Unexpected Error:', error);
      }

      // Re-throw the error so it can be handled by the calling function
      return Promise.reject(error);
    }
  );
};
