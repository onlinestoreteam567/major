// Add Authorization header with Bearer token for requests to /admin path except for the refresh token endpoint
export const applyAuthInterceptor = (apiClient) => {
  apiClient.interceptors.request.use(
    (config) => {
      // Don't add Authorization header for the refresh token endpoint
      if (config.url.includes('/auth/token/refresh/')) {
        delete config.headers['Authorization'];
      } // Only add Authorization header for /admin path
      else if (window.location.href.includes('/admin')) {
        let accessToken = localStorage.getItem('accessToken');
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
};
