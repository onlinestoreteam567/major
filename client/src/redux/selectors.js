// import { createSelector } from '@reduxjs/toolkit';

export const loadTypes = (state) => state.types.isLoading;
export const selectTypes = (state) => state.types.types;

export const loadCategories = (state) => state.category.isLoading;
export const selectCategories = (state) => state.category.categories;

export const loadBestSeller = (state) => state.bests.isLoading;
export const selectBestSeller = (state) => state.bests.bests;

export const loadSets = (state) => state.sets.isLoading;
export const selectSets = (state) => state.sets.sets;

export const loadProducts = (state) => state.products.isLoading;
export const selectProducts = (state) => state.products.products;

export const selectFitCategory = (state) => state.fitCategory.fitCategory;
export const loadFitCategory = (state) => state.fitCategory.isLoading;
// export const selectFiltered = (state) => state.products.items;

export const loadProductId = (state) => state.productId.isLoading;
export const selectProductId = (state) => state.productId.productId;
// export const selectIdItems = (state) => state.productId.items;
