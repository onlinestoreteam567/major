import apiClient from '@config/apiClient';

const USER_ENDPOINT = import.meta.env.VITE_USER_ENDPOINT;

if (!USER_ENDPOINT) {
  console.error('USER_ENDPOINT is not defined! Check the configuration in the .env file.');
}

// function validateUserData(data) {
//   const { email, first_name, last_name, role } = data;
//   if (
//     !email ||
//     typeof email !== 'string' ||
//     !first_name ||
//     typeof first_name !== 'string' ||
//     !last_name ||
//     typeof last_name !== 'string' ||
//     typeof role !== 'number'
//   ) {
//     throw new Error(
//       'Invalid data structure. Expected email (string), first_name (string), last_name (string), and role (number).'
//     );
//   }
// }

const UserService = {
  // Get all users
  async getUsers() {
    const { data } = await apiClient.get(`${USER_ENDPOINT}/`);
    return data;
  },

  // Create a new user
  async createUser(data) {
    if (!data) throw new Error('User data is required');

    // // Validate user data
    // validateUserData(data);

    await apiClient.post(`${USER_ENDPOINT}/`, data);
  },

  // Get a user by ID
  async getUserById(userId) {
    if (!userId) throw new Error('User ID is required');

    const { data } = await apiClient.get(`${USER_ENDPOINT}/${userId}/`);
    return data;
  },

  // Update a user by ID
  async updateUserById(userId, updatedUser) {
    if (!userId) throw new Error('User ID is required');
    if (!updatedUser) throw new Error('Updated user data is required');

    await apiClient.put(`${USER_ENDPOINT}/${userId}/`, updatedUser);
  },

  // Partially update a user by ID
  async patchUserById(userId, partialUpdate) {
    if (!userId) throw new Error('User ID is required');
    if (!partialUpdate) throw new Error('Partial update data is required');

    await apiClient.patch(`${USER_ENDPOINT}/${userId}/`, partialUpdate);
  },

  // Delete a user by ID
  async deleteUserById(userId) {
    if (!userId) throw new Error('User ID is required');

    await apiClient.delete(`${USER_ENDPOINT}/${userId}/`);
  },
};

export default UserService;