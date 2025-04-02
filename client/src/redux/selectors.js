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

export const loadProductId = (state) => state.productId.isLoading;
export const selectProductId = (state) => state.productId.productId;

export const filterCategory = (state) => state.filter.category;
export const filterType = (state) => state.filter.type;
export const filterStatus = (state) => state.filter.status;
export const filterPrice = (state) => state.filter.price;
export const sorting = (state) => state.filter.sorting;

export const loadSearch = (state) => state.search.isLoading;
export const selectSearch = (state) => state.search.searchResults;

export const loadPromocode = (state) => state.promocode.isLoading;
export const selectPromocode = (state) => state.promocode.response;

export const loadBanner = (state) => state.banner.isLoading;
export const selectBanner = (state) => state.banner.slides;
