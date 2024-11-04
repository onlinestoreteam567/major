import axios from 'axios';

// Axios instance with base settings
const apiClient = axios.create({
  baseURL: 'https://major-rvf6.onrender.com/api/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

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
    // Log the error details for debugging
    if (error.response) {
      console.error('API Error:', {
        status: error.response.status,
        data: error.response.data,
        config: error.config,
      });

      // Example handling for specific status codes
      switch (error.response.status) {
        case 401:
          // Handle unauthorized access
          console.warn('Unauthorized access - possibly redirect to login');
          break;
        case 404:
          console.warn('Requested resource not found');
          break;
        case 500:
          console.error('Internal Server Error');
          break;
        // Add more cases as needed
        default:
          console.error('An unexpected error occurred');
      }
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Network Error:', error.message);
    } else {
      // Something happened in setting up the request
      console.error('Unexpected Error:', error.message);
    }

    return Promise.reject(error);
  }
);

export default apiClient;
