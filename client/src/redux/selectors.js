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
export const selectFilteredProducts = (state) => state.products.filteredProducts;

export const selectFitCategory = (state) => state.fitCategory.fitCategory;
export const loadFitCategory = (state) => state.fitCategory.isLoading;

export const loadProductId = (state) => state.productId.isLoading;
export const selectProductId = (state) => state.productId.productId;
export const errorProductId = (state) => state.productId.error;

export const filterCategory = (state) => state.filter.category;
export const filterType = (state) => state.filter.type;
export const filterStatus = (state) => state.filter.status;
export const filterPrice = (state) => state.filter.price;
export const sorting = (state) => state.filter.sorting;

export const loadSearch = (state) => state.search.isLoading;
export const selectSearch = (state) => state.search.searchResults;

export const loadPromocode = (state) => state.promocode.isLoading;
export const selectPromocode = (state) => state.promocode.response;
export const errorPromocode = (state) => state.promocode.error;

export const loadBanner = (state) => state.banner.isLoading;
export const selectBanner = (state) => state.banner.slides;

export const loadBannerDelete = (state) => state.bannerDelete.isLoading;
export const selectBannerDelete = (state) => state.bannerDelete.response;

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
export const selectFilteredReviews = (state) => state.reviews.filteredReviews;
export const isFetchedAllReviews = (state) => state.reviews.isFetchedAllReviews;

export const loadReviewDelete = (state) => state.reviewDelete.isLoading;
export const responseReviewDelete = (state) => state.reviewDelete.response;

export const loadCart = (state) => state.cart.isLoading;
export const selectCart = (state) => state.cart.items;
export const selectCartSavedIds = (state) => state.cart.savedIds;

export const selectViewedProducts = (state) => state.viewedProducts.viewedProducts;
export const selectFetchedViewedProducts = (state) => state.viewedProducts.fechedViewedProducts;
export const loadViewedProducts = (state) => state.viewedProducts.isLoading;

export const loadSettlements = (state) => state.settlements.isLoading;
export const selectSettlements = (state) => state.settlements.settlements;
export const showNothingSettlements = (state) => state.settlements.isShowNothing;

export const loadWarehouses = (state) => state.warehouses.isLoading;
export const selectWarehouses = (state) => state.warehouses.warehouses;
export const isDisabledWarehouses = (state) => state.warehouses.isDisabled;

export const loadPartners = (state) => state.partners.isLoading;
export const selectPartners = (state) => state.partners.partners;
export const errorPartners = (state) => state.partners.isDisabled;

export const loadPartnerCreate = (state) => state.partnerCreate.isLoading;
export const selectPartnerCreate = (state) => state.partnerCreate.response;
export const errorPartnerCreate = (state) => state.partnerCreate.isDisabled;

export const loadPartnerDelete = (state) => state.partnerDelete.isLoading;
export const selectPartnerDelete = (state) => state.partnerDelete.response;

export const loadPartnerById = (state) => state.partnerById.isLoading;
export const responsePartnerById = (state) => state.partnerById.partner;

export const loadPartnerEdit = (state) => state.partnerEdit.isLoading;
export const responsePartnerEdit = (state) => state.partnerEdit.response;
export const errorPartnerEdit = (state) => state.partnerEdit.error;

export const loadAddReview = (state) => state.addReview.isLoading;
export const responseAddReview = (state) => state.addReview.response;
export const errorAddReview = (state) => state.addReview.error;

export const loadUploadImage = (state) => state.uploadImage.isLoading;
export const selectUploadImage = (state) => state.uploadImage.uploadedImage;
export const errorUploadImage = (state) => state.uploadImage.error;

export const loadAuth = (state) => state.auth.isLoading;
export const selectAccessToken = (state) => state.auth.accessToken;
export const selectRefreshToken = (state) => state.auth.refreshToken;
export const selectRole = (state) => state.auth.role;
export const errorAuth = (state) => state.auth.error;

export const selectVerifyToken = (state) => state.verifyToken.isVerified;
export const loadVerifyToken = (state) => state.verifyToken.isLoading;
export const errorVerifyToken = (state) => state.verifyToken.error;

export const adminMessage = (state) => state.adminMessage.message;

export const loadCreateProduct = (state) => state.createProduct.isLoading;
export const responseCreateProduct = (state) => state.createProduct.response;
export const errorCreateProduct = (state) => state.createProduct.error;

export const loadEditProduct = (state) => state.editProduct.isLoading;
export const responseEditProduct = (state) => state.editProduct.response;
export const errorEditProduct = (state) => state.editProduct.error;

export const loadProductDelete = (state) => state.productDelete.isLoading;
export const responseProductDelete = (state) => state.productDelete.response;
export const errorProductDelete = (state) => state.productDelete.error;

export const loadCreatePurposeCategory = (state) => state.createPurposeCategory.isLoading;
export const responseCreatePurposeCategory = (state) => state.createPurposeCategory.response;
export const errorCreatePurposeCategory = (state) => state.createPurposeCategory.error;

export const loadPurposeById = (state) => state.purposeCategoryById.isLoading;
export const responsePurposeById = (state) => state.purposeCategoryById.categoryId;
export const errorPurposeById = (state) => state.purposeCategoryById.error;

export const loadPurposeEdit = (state) => state.purposeEdit.isLoading;
export const responsePurposeEdit = (state) => state.purposeEdit.response;
export const errorPurposeEdit = (state) => state.purposeEdit.error;

export const loadPurposeDelete = (state) => state.purposeDelete.isLoading;
export const responsePurposeDelete = (state) => state.purposeDelete.response;
export const errorPurposeDelete = (state) => state.purposeDelete.error;

export const loadCreateTypeCategory = (state) => state.createTypeCategory.isLoading;
export const responseCreateTypeCategory = (state) => state.createTypeCategory.response;
export const errorCreateTypeCategory = (state) => state.createTypeCategory.error;

export const loadTypeById = (state) => state.typeById.isLoading;
export const responseTypeById = (state) => state.typeById.categoryId;
export const errorTypeById = (state) => state.typeById.error;

export const loadTypeEdit = (state) => state.typeEdit.isLoading;
export const responseTypeEdit = (state) => state.typeEdit.response;
export const errorTypeEdit = (state) => state.typeEdit.error;

export const loadTypeDelete = (state) => state.typeDelete.isLoading;
export const responseTypeDelete = (state) => state.typeDelete.response;
export const errorTypeDelete = (state) => state.typeDelete.error;

export const loadPromocodeList = (state) => state.promocodeList.isLoading;
export const responsePromocodeList = (state) => state.promocodeList.response;
export const errorPromocodeList = (state) => state.promocodeList.error;
export const isFetchedAllPromocodes = (state) => state.promocodeList.isFetchedAllPromocodes;

export const loadPromocodeCreate = (state) => state.promocodeCreate.isLoading;
export const responsePromocodeCreate = (state) => state.promocodeCreate.response;
export const errorPromocodeCreate = (state) => state.promocodeCreate.error;

export const loadPromocodeById = (state) => state.promocodeById.isLoading;
export const responsePromocodeById = (state) => state.promocodeById.response;
export const errorPromocodeById = (state) => state.promocodeById.error;

export const loadPromocodeEdit = (state) => state.promocodeEdit.isLoading;
export const responsePromocodeEdit = (state) => state.promocodeEdit.response;
export const errorPromocodeEdit = (state) => state.promocodeEdit.error;

export const loadPromocodeDelete = (state) => state.promocodeDelete.isLoading;
export const responsePromocodeDelete = (state) => state.promocodeDelete.response;
export const errorPromocodeDelete = (state) => state.promocodeDelete.error;

export const productSearchValue = (state) => state.adminProductSearch.value;
export const reviewsSearchValue = (state) => state.adminReviewsSearch.value;

export const selectContacts = (state) => state.contacts.contacts;
export const loadContacts = (state) => state.contacts.isLoading;

export const selectContactsEdit = (state) => state.contactsEdit.response;
export const loadContactsEdit = (state) => state.contactsEdit.isLoading;
export const errorContactsEdit = (state) => state.contactsEdit.error;

export const selectUsers = (state) => state.usersList.response;
export const loadUsers = (state) => state.usersList.isLoading;
export const errorUsers = (state) => state.usersList.error;

export const selectUserDelete = (state) => state.userDelete.response;
export const loadUserDelete = (state) => state.userDelete.isLoading;

export const selectUserCreate = (state) => state.userCreate.response;
export const loadUserCreate = (state) => state.userCreate.isLoading;
export const errorUserCreate = (state) => state.userCreate.error;

export const selectUserEdit = (state) => state.userEdit.response;
export const loadUserEdit = (state) => state.userEdit.isLoading;
export const errorUserEdit = (state) => state.userEdit.error;

export const loadUserById = (state) => state.userById.isLoading;
export const responseUserById = (state) => state.userById.userById;

export const loadCreateInvoice = (state) => state.createInvoice.isLoading;
export const responseCreateInvoice = (state) => state.createInvoice.response;
export const errorCreateInvoice = (state) => state.createInvoice.error;

export const loadCheckInvoiceStatus = (state) => state.checkInvoiceStatus.isLoading;
export const responseCheckInvoiceStatus = (state) => state.checkInvoiceStatus.response;
export const errorCheckInvoiceStatus = (state) => state.checkInvoiceStatus.error;

export const loadCreateSupportRequest = (state) => state.createSupportRequest.isLoading;
export const responseCreateSupportRequest = (state) => state.createSupportRequest.response;
export const errorCreateSupportRequest = (state) => state.createSupportRequest.error;

export const loadCreateCooperationRequest = (state) => state.createCooperationRequest.isLoading;
export const responseCreateCooperationRequest = (state) => state.createCooperationRequest.response;
export const errorCreateCooperationRequest = (state) => state.createCooperationRequest.error;
