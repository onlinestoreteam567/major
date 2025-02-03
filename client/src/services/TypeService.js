import apiClient from '@config/apiClient';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { handleApiError } from '@utils/handleApiError';

const TYPE_ENDPOINT = import.meta.env.VITE_TYPE_ENDPOINT;

if (!TYPE_ENDPOINT) {
  console.error('TYPE_ENDPOINT is not defined! Check the configuration in the .env file.');
}

export const fetchTypes = createAsyncThunk('types/fetchTypes', async (_, { rejectWithValue }) => {
  try {
    const { data } = await apiClient.get(`${TYPE_ENDPOINT}/`);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const TypeService = {
  // async getTypes() {
  //   try {
  //     const { data } = await apiClient.get(`${TYPE_ENDPOINT}/`);
  //     return data;
  //   } catch (error) {
  //     handleApiError(error);
  //   }
  // },

  // Create a new type
  async createType(typeName) {
    if (!typeName) {
      console.error('Invalid type data');
      throw new Error('Type name is required');
    }

    return apiClient.post(`${TYPE_ENDPOINT}/`, { name: typeName });
  },

  // Get type by ID
  async getTypeById(typeId) {
    if (!typeId) {
      console.error('Type ID is required');
      throw new Error('Invalid type ID');
    }

    const { data } = await apiClient.get(`${TYPE_ENDPOINT}/${typeId}/`);
    return data;
  },

  // Update type by ID
  async updateTypeById(typeId, updatedType) {
    if (!typeId || !updatedType) {
      console.error('Invalid type data');
      throw new Error('Type ID and updated data are required');
    }

    await apiClient.put(`${TYPE_ENDPOINT}/${typeId}/`, updatedType);
  },

  // Partially update type by ID
  async patchTypeById(typeId, partialUpdate) {
    if (!typeId || !partialUpdate) {
      console.error('Invalid type data');
      throw new Error('Type ID and partial data are required');
    }

    await apiClient.patch(`${TYPE_ENDPOINT}/${typeId}/`, partialUpdate);
  },

  // Delete type by ID
  async deleteTypeById(typeId) {
    if (!typeId) {
      console.error('Type ID is required');
      throw new Error('Invalid type ID');
    }

    await apiClient.delete(`${TYPE_ENDPOINT}/${typeId}/`);
  },
};

export default TypeService;
