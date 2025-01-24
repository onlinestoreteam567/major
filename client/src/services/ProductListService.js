import apiClient from '@config/apiClient';
import { handleApiError } from '@utils/handleApiError';

const PRODUCT_LIST_ENDPOINT = import.meta.env.VITE_PRODUCT_LIST_ENDPOINT;

if (!PRODUCT_LIST_ENDPOINT) {
  console.error('VITE_PRODUCT_LIST_ENDPOINT is not defined! Check the configuration in the .env file.');
}

const ProductListService = {
  async getProductList() {
    try {
      const { data } = await apiClient.get(`${PRODUCT_LIST_ENDPOINT}/`);
      return data;
    } catch (error) {
      handleApiError(error);
    }
  },

  async createProductList(typeName) {
    // Validate type name before making the request
    if (!typeName) {
      console.error('Invalid type data');
      throw new Error('Type name is required');
    }

    try {
      return await apiClient.post(`${PRODUCT_LIST_ENDPOINT}/`, { name: typeName });
    } catch (error) {
      handleApiError(error);
    }
  },

  async getProductListById(typeId) {
    // Validate type ID before making the request
    if (!typeId) {
      console.error('Type ID is required');
      throw new Error('Invalid type ID');
    }

    try {
      const { data } = await apiClient.get(`${PRODUCT_LIST_ENDPOINT}/${typeId}/`);
      return data;
    } catch (error) {
      handleApiError(error); // logs and rethrows the error
    }
  },

  async updateProductListById(typeId, updatedType) {
    // Validate type ID and updated data before making the request
    if (!typeId || !updatedType) {
      console.error('Invalid type data');
      throw new Error('Type ID and updated data are required');
    }

    try {
      await apiClient.put(`${PRODUCT_LIST_ENDPOINT}/${typeId}/`, updatedType);
    } catch (error) {
      handleApiError(error);
    }
  },

  async patchProductListById(typeId, partialUpdate) {
    // Validate type ID and partial update data before making the request
    if (!typeId || !partialUpdate) {
      console.error('Invalid type data');
      throw new Error('Type ID and partial data are required');
    }

    try {
      await apiClient.patch(`${PRODUCT_LIST_ENDPOINT}/${typeId}/`, partialUpdate);
    } catch (error) {
      handleApiError(error);
    }
  },

  async deleteProductListById(typeId) {
    // Validate type ID before making the request
    if (!typeId) {
      console.error('Type ID is required');
      throw new Error('Invalid type ID');
    }

    try {
      await apiClient.delete(`${PRODUCT_LIST_ENDPOINT}/${typeId}/`);
    } catch (error) {
      handleApiError(error);
    }
  },
};

export default ProductListService;
