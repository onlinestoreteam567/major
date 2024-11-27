import apiClient from '@config/apiClient';
import { handleApiError } from '@utils/handleApiError';

const USER_ENDPOINT = import.meta.env.VITE_USER_ENDPOINT;

if (!USER_ENDPOINT) {
  console.error('VITE_USER_ENDPOINT is not defined! Check the configuration in the .env file.');
}

const UserService = {
  async getUsers() {
    try {
      const { data } = await apiClient.get(`${USER_ENDPOINT}/`);
      return data;
    } catch (error) {
      handleApiError(error);
    }
  },

  async createUser(data) {
    // Ensure the provided data is valid
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

    try {
      // Make the API call to create the user
      await apiClient.post(`${USER_ENDPOINT}/`, data);
    } catch (error) {
      // Handle any API-related errors
      handleApiError(error);
    }
  },

  async getUserById(userId) {
    // Validate user ID before making the request
    if (!userId) {
      console.error('User ID is required');
      throw new Error('Invalid user ID');
    }

    try {
      const { data } = await apiClient.get(`${USER_ENDPOINT}/${userId}/`);
      return data;
    } catch (error) {
      handleApiError(error);
    }
  },

  async updateUserById(userId, updatedUser) {
    // Validate type ID and updated data before making the request
    // {
    //   "password": "string",
    //   "first_name": "string",
    //   "last_name": "string",
    //   "role": 9223372036854776000
    // }
    if (!userId || !updatedUser) {
      console.error('Invalid type data');
      throw new Error('Type ID and updated data are required');
    }

    try {
      await apiClient.put(`${USER_ENDPOINT}/${userId}/`, updatedUser);
    } catch (error) {
      handleApiError(error);
    }
  },

  async patchUserById(typeId, partialUpdate) {
    // Validate type ID and partial update data before making the request
    if (!typeId || !partialUpdate) {
      console.error('Invalid type data');
      throw new Error('Type ID and partial data are required');
    }

    try {
      await apiClient.patch(`${USER_ENDPOINT}/${typeId}/`, partialUpdate);
    } catch (error) {
      handleApiError(error);
    }
  },

  async deleteUserById(typeId) {
    // Validate type ID before making the request
    if (!typeId) {
      console.error('Type ID is required');
      throw new Error('Invalid type ID');
    }

    try {
      await apiClient.delete(`${USER_ENDPOINT}/${typeId}/`);
    } catch (error) {
      handleApiError(error);
    }
  },
};

export default UserService;
