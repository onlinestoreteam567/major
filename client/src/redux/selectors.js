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

export const loadBannerDelete = (state) => state.bannerDelete.isLoading;
export const selectBannerDelete = (state) => state.bannerDelete.slides;

export const loadBannerCreate = (state) => state.bannerCreate.isLoading;
export const responseBannerCreate = (state) => state.bannerCreate.response;
export const errorBannerCreate = (state) => state.bannerCreate.error;

export const loadBannerById = (state) => state.bannerById.isLoading;
export const responseBannerById = (state) => state.bannerById.slide;

export const loadBannerEdit = (state) => state.bannerEdit.isLoading;
export const responseBannerEdit = (state) => state.bannerEdit.response;
export const errorBannerEdit = (state) => state.bannerEdit.error;

export const loadReviews = (state) => state.reviews.isLoading;
export const selectReviews = (state) => state.reviews.reviews;

export const loadReviewDelete = (state) => state.reviewDelete.isLoading;
export const responseReviewDelete = (state) => state.reviewDelete.response;

export const loadCart = (state) => state.cart.isLoading;
export const selectCart = (state) => state.cart.items;
export const selectCartSavedIds = (state) => state.cart.savedIds;

export const loadSettlements = (state) => state.settlements.isLoading;
export const selectSettlements = (state) => state.settlements.settlements;

export const loadWarehouses = (state) => state.warehouses.isLoading;
export const selectWarehouses = (state) => state.warehouses.warehouses;
export const isDisabledWarehouses = (state) => state.warehouses.isDisabled;
