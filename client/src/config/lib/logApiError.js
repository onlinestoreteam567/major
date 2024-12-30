// Function for logging API errors
export const logApiError = (error) => {
  if (error.response) {
    // Logging errors from the server response
    console.error('API Error:', {
      status: error.response.status,
      data: error.response.data,
      url: error.config?.url,
      method: error.config?.method,
    });

    // Handling specific HTTP status codes
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
    // Logging network errors (request was made, but no response was received)
    console.error('Network Error: No response received.', error.message);
  } else {
    // Logging unexpected errors (during request setup)
    console.error('Unexpected Error:', error.message);
  }
};
