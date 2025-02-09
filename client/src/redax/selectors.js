export const selectProduct = (state) => state.product.product;
export const selectProducts = (state) => state.products.products;
export const selectBestSeller = (state) => state.bests.bests;
export const selectLng = (state) => state.language.lng;

export const selectLoading = (state) => state.tasks.isLoading;
export const selectError = (state) => state.tasks.error;
