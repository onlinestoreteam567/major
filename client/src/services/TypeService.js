import apiClient from '@config/apiClient';
import { handleApiError } from '@utils/handleApiError';

const TYPE_ENDPOINT = import.meta.env.VITE_TYPE_ENDPOINT;

if (!TYPE_ENDPOINT) {
  console.error('VITE_TYPE_ENDPOINT is not defined! Check the configuration in the .env file.');
}

const TypeService = {
  async getTypes() {
    try {
      const { data } = await apiClient.get(`${TYPE_ENDPOINT}/`);
      return data;
    } catch (error) {
      handleApiError(error);
    }
  },

  async createType(typeName) {
    // Validate type name before making the request
    if (!typeName) {
      console.error('Invalid type data');
      throw new Error('Type name is required');
    }

    try {
      return await apiClient.post(`${TYPE_ENDPOINT}/`, { name: typeName });
    } catch (error) {
      handleApiError(error);
    }
  },

  async getTypeById(typeId) {
    // Validate type ID before making the request
    if (!typeId) {
      console.error('Type ID is required');
      throw new Error('Invalid type ID');
    }

    try {
      const { data } = await apiClient.get(`${TYPE_ENDPOINT}/${typeId}/`);
      return data;
    } catch (error) {
      handleApiError(error); // logs and rethrows the error
    }
  },

  async updateTypeById(typeId, updatedType) {
    // Validate type ID and updated data before making the request
    if (!typeId || !updatedType) {
      console.error('Invalid type data');
      throw new Error('Type ID and updated data are required');
    }

    try {
      await apiClient.put(`${TYPE_ENDPOINT}/${typeId}/`, updatedType);
    } catch (error) {
      handleApiError(error);
    }
  },

  async patchTypeById(typeId, partialUpdate) {
    // Validate type ID and partial update data before making the request
    if (!typeId || !partialUpdate) {
      console.error('Invalid type data');
      throw new Error('Type ID and partial data are required');
    }

    try {
      await apiClient.patch(`${TYPE_ENDPOINT}/${typeId}/`, partialUpdate);
    } catch (error) {
      handleApiError(error);
    }
  },

  async deleteTypeById(typeId) {
    // Validate type ID before making the request
    if (!typeId) {
      console.error('Type ID is required');
      throw new Error('Invalid type ID');
    }

    try {
      await apiClient.delete(`${TYPE_ENDPOINT}/${typeId}/`);
    } catch (error) {
      handleApiError(error);
    }
  },
};

export default TypeService;
