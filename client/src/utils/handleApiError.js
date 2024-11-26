export const handleApiError = (error) => {
  if (error.response) {
    // Log server-side errors
    console.error('Server error:', error.response.status, error.response.data);
  } else if (error.request) {
    // Log network-related errors
    console.error('Network error: No response received.', error.message);
  } else {
    // Log unexpected errors
    console.error('Unexpected error:', error.message);
  }
  // Re-throw the error to allow additional handling in services
  throw error;
};
