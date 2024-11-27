import apiClient from '@config/apiClient';

const USER_ENDPOINT = import.meta.env.VITE_USER_ENDPOINT;

if (!USER_ENDPOINT) {
  console.error('VITE_USER_ENDPOINT is not defined! Check the configuration in the .env file.');
}

const UserService = {
  // Get all users
  async getUsers() {
    const { data } = await apiClient.get(`${USER_ENDPOINT}/`);
    return data;
  },

  // Create a new user
  async createUser(data) {
    if (!data) {
      console.error('User data is required');
      throw new Error('Invalid user data');
    }

    // Validate that the data has the correct structure
    const { email, first_name, last_name, role } = data;
    if (
      typeof email !== 'string' ||
      typeof first_name !== 'string' ||
      typeof last_name !== 'string' ||
      typeof role !== 'number'
    ) {
      console.error('Invalid data structure');
      throw new Error('Data must contain email (string), first_name (string), last_name (string), and role (number)');
    }

    return apiClient.post(`${USER_ENDPOINT}/`, data);
  },

  // Get a user by ID
  async getUserById(userId) {
    if (!userId) {
      console.error('User ID is required');
      throw new Error('Invalid user ID');
    }

    const { data } = await apiClient.get(`${USER_ENDPOINT}/${userId}/`);
    return data;
  },

  // Update a user by ID
  async updateUserById(userId, updatedUser) {
    if (!userId || !updatedUser) {
      console.error('Invalid user data');
      throw new Error('User ID and updated data are required');
    }

    await apiClient.put(`${USER_ENDPOINT}/${userId}/`, updatedUser);
  },

  // Partially update a user by ID
  async patchUserById(userId, partialUpdate) {
    if (!userId || !partialUpdate) {
      console.error('Invalid user data');
      throw new Error('User ID and partial data are required');
    }

    await apiClient.patch(`${USER_ENDPOINT}/${userId}/`, partialUpdate);
  },

  // Delete a user by ID
  async deleteUserById(userId) {
    if (!userId) {
      console.error('User ID is required');
      throw new Error('Invalid user ID');
    }

    await apiClient.delete(`${USER_ENDPOINT}/${userId}/`);
  },
};

export default UserService;
