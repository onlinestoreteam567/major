import axios from 'axios';

// Axios instance with base settings
const apiClient = axios.create({
  baseURL: 'https://major-rvf6.onrender.com/api/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

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
    if (error.response) {
      // Handle errors with a response from the server
      console.error('API Error:', {
        status: error.response.status,
        data: error.response.data,
        url: error.config?.url,
        method: error.config?.method,
      });

      // Specific error handling based on HTTP status codes
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
