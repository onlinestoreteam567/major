import apiClient from '@config/apiClient';
import { handleApiError } from '@utils/handleApiError';

// Ensure that the API category endpoint is correctly set in the environment
const CATEGORY_ENDPOINT = import.meta.env.VITE_CATEGORY_ENDPOINT;
if (!CATEGORY_ENDPOINT) {
  console.error('VITE_CATEGORY_ENDPOINT is not defined! Check the configuration in the .env file.');
}

const CategoryService = {
  async getCategory() {
    try {
      const { data } = await apiClient.get(`${CATEGORY_ENDPOINT}/`);
      return data;
    } catch (error) {
      handleApiError(error);
    }
  },

  async createCategory(categoryName) {
    if (!categoryName) {
      console.error('Invalid category data');
      throw new Error('Category name is required');
    }

    try {
      return await apiClient.post(`${CATEGORY_ENDPOINT}/`, { name: categoryName });
    } catch (error) {
      handleApiError(error);
    }
  },

  async getCategoryById(categoryId) {
    if (!categoryId) {
      console.error('Category ID is required');
      throw new Error('Invalid category ID');
    }

    try {
      const { data } = await apiClient.get(`${CATEGORY_ENDPOINT}/${categoryId}/`);
      return data;
    } catch (error) {
      handleApiError(error); // logs and rethrows the error
    }
  },

  async updateCategoryById(categoryId, updatedCategory) {
    if (!categoryId || !updatedCategory) {
      console.error('Invalid category data');
      throw new Error('Category ID and updated data are required');
    }

    try {
      await apiClient.put(`${CATEGORY_ENDPOINT}/${categoryId}/`, updatedCategory);
    } catch (error) {
      handleApiError(error);
    }
  },

  async patchCategoryById(categoryId, partialUpdate) {
    if (!categoryId || !partialUpdate) {
      console.error('Invalid category data');
      throw new Error('Category ID and partial data are required');
    }

    try {
      await apiClient.patch(`${CATEGORY_ENDPOINT}/${categoryId}/`, partialUpdate);
    } catch (error) {
      handleApiError(error);
    }
  },

  async deleteCategoryById(categoryId) {
    if (!categoryId) {
      console.error('Category ID is required');
      throw new Error('Invalid category ID');
    }

    try {
      await apiClient.delete(`${CATEGORY_ENDPOINT}/${categoryId}/`);
    } catch (error) {
      handleApiError(error);
    }
  },
};

export default CategoryService;
