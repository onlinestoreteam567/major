import apiClient from '@config/apiClient'; // adjust the path as needed
import { handleApiError } from '@utils/handleApiError';

const CategoryService = {
  async getCategory() {
    try {
      const { data } = await apiClient.get(`/products/product_purpose_categories/`);
      return data;
    } catch (error) {
      handleApiError(error);
    }
  },

  async createCategory(categoryName) {
    try {
      if (!categoryName) {
        throw new Error('Invalid category data');
      }
      return await apiClient.post('/products/product_purpose_categories/', { name: categoryName });
    } catch (error) {
      handleApiError(error);
    }
  },

  async getCategoryById(categoryId) {
    try {
      const { data } = await apiClient.get(`/products/product_purpose_categories/${categoryId}`);
      return data;
    } catch (error) {
      handleApiError(error); // logs and rethrows the error
    }
  },

  async updateCategoryById(categoryId, updatedCategory) {
    try {
      await apiClient.put(`/products/product_purpose_categories/${categoryId}`, updatedCategory);
    } catch (error) {
      handleApiError(error);
    }
  },

  async patchCategoryById(categoryId, partialUpdate) {
    try {
      await apiClient.put(`/products/product_purpose_categories/${categoryId}`, partialUpdate);
    } catch (error) {
      handleApiError(error);
    }
  },

  async deleteCategoryById(categoryId) {
    try {
      await apiClient.delete(`/products/product_purpose_categories/${categoryId}`);
    } catch (error) {
      handleApiError(error);
    }
  },
};

export default CategoryService;
