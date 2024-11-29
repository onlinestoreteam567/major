import apiClient from '@config/apiClient';

// Ensure that the API category endpoint is correctly set in the environment
const CATEGORY_ENDPOINT = import.meta.env.CATEGORY_ENDPOINT;
if (!CATEGORY_ENDPOINT) {
  console.error('CATEGORY_ENDPOINT is not defined! Check the configuration in the .env file.');
}

const CategoryService = {
  // Fetch all categories
  async getCategories() {
    const { data } = await apiClient.get(`${CATEGORY_ENDPOINT}/`);
    return data;
  },

  // Create a new category
  async createCategory(categoryName) {
    if (!categoryName) {
      console.error('Invalid category data');
      throw new Error('Category name is required');
    }

    return apiClient.post(`${CATEGORY_ENDPOINT}/`, { name: categoryName });
  },

  // Fetch a category by its ID
  async getCategoryById(categoryId) {
    if (!categoryId) {
      console.error('Category ID is required');
      throw new Error('Invalid category ID');
    }

    const { data } = await apiClient.get(`${CATEGORY_ENDPOINT}/${categoryId}/`);
    return data;
  },

  // Update an existing category by its ID
  async updateCategoryById(categoryId, updatedCategory) {
    if (!categoryId || !updatedCategory) {
      console.error('Invalid category data');
      throw new Error('Category ID and updated data are required');
    }

    await apiClient.put(`${CATEGORY_ENDPOINT}/${categoryId}/`, updatedCategory);
  },

  // Partially update a category by its ID
  async patchCategoryById(categoryId, partialUpdate) {
    if (!categoryId || !partialUpdate) {
      console.error('Invalid category data');
      throw new Error('Category ID and partial data are required');
    }

    await apiClient.patch(`${CATEGORY_ENDPOINT}/${categoryId}/`, partialUpdate);
  },

  // Delete a category by its ID
  async deleteCategoryById(categoryId) {
    if (!categoryId) {
      console.error('Category ID is required');
      throw new Error('Invalid category ID');
    }

    await apiClient.delete(`${CATEGORY_ENDPOINT}/${categoryId}/`);
  },
};

export default CategoryService;
