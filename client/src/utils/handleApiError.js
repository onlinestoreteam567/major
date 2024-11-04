export const handleApiError = (error) => {
  if (error.response) {
    console.error('Server error:', error.response.status, error.response.data);
    console.error('Request URL:', error.config.url);
    console.error('Request Method:', error.config.method);
  } else if (error.request) {
    console.error('Network error:', error.message);
  } else {
    console.error('Unexpected error:', error.message);
  }
  throw error;
};
