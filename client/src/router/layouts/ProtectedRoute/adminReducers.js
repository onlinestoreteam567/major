// adminReducers.js

// ALL Async Reducer Imports (These will be code-split)
import { uploadImageReducer } from '@redux/blogs/uploadImageSlice';
import { partnerByIdReducer } from '@redux/partners/partnerByIdSlice';
import { partnerEditReducer } from '@redux/partners/partnerEditSlice';
import { partnerDeleteReducer } from '@redux/partners/partnerDeleteSlice';
import { partnerCreateReducer } from '@redux/partners/partnerCreateSlice';
import { bannerDeleteReducer } from '@redux/banner/bannerDeleteSlice';
import { bannerCreateReducer } from '@redux/banner/bannerCreateSlice';
import { bannerByIdReducer } from '@redux/banner/bannerByIdSlice';
import { bannerEditReducer } from '@redux/banner/bannerEditSlice';
import { adminMessageSliceReducer } from '@redux/admin/adminMessageSlice';
import { createProductReducer } from '@redux/admin/product/createProductSlice';
import { editProductReducer } from '@redux/admin/product/editProductSlice';
import { productDeleteReducer } from '@redux/admin/product/productDeleteSlice';
import { createPurposeCategoryReducer } from '@redux/admin/purpose/createPurposeCategorySlice';
import { createTypeCategoryReducer } from '@redux/admin/type/createTypeCategorySlice';
import { purposeCategoryByIdReducer } from '@redux/admin/purpose/purposeCategoryByIdSlice';
import { purposeEditReducer } from '@redux/admin/purpose/purposeEditSlice';
import { purposeDeleteReducer } from '@redux/admin/purpose/purposeDeleteSlice';
import { typeByIdReducer } from '@redux/admin/type/typeByIdSlice';
import { typeEditReducer } from '@redux/admin/type/typeEditSlice';
import { typeDeleteReducer } from '@redux/admin/type/typeDeleteSlice';
import { promocodeListReducer } from '@redux/admin/promocode/promocodeListSlice';
import { promocodeCreateReducer } from '@redux/admin/promocode/promocodeCreateSlice';
import { promocodeByIdReducer } from '@redux/admin/promocode/promocodeByIdSlice';
import { promocodeEditReducer } from '@redux/admin/promocode/promocodeEditSlice';
import { promocodeDeleteReducer } from '@redux/admin/promocode/promocodeDeleteSlice';
import { addReviewReducer } from '@redux/reviews/addReviewSlice';
import { contactsEditReducer } from '@redux/admin/contacts/contactsEditSlice';
import { adminProductSearchReducer } from '@redux/admin/search/adminProductSearchSlice';
import { adminReviewsSearchReducer } from '@redux/admin/search/adminReviewsSearchSlice';
import { usersListReducer } from '@redux/admin/settings/userList';
import { userDeleteReducer } from '@redux/admin/settings/userDelete';
import { userCreateReducer } from '@redux/admin/settings/userCreate';
import { userEditReducer } from '@redux/admin/settings/userEdit';
import { userByIdReducer } from '@redux/admin/settings/userById';
import { productsReducer } from '@redux/products/listSlice';
import { productIdReducer } from '@redux/products/cardSlice';
import { categoryReducer } from '@redux/params/categorySlice';
import { typesReducer } from '@redux/params/purposeSlice';
import { bannerReducer } from '@redux/banner/bannerSlice';
import { partnersReducer } from '@redux/partners/partnerSlice';
import { reviewReducer } from '@redux/reviews/reviewsSlice';

// Export an object containing all the reducers
export const adminReducers = {
  uploadImage: uploadImageReducer,
  partners: partnersReducer,
  partnerById: partnerByIdReducer,
  partnerEdit: partnerEditReducer,
  partnerDelete: partnerDeleteReducer,
  partnerCreate: partnerCreateReducer,
  banner: bannerReducer,
  bannerDelete: bannerDeleteReducer,
  bannerCreate: bannerCreateReducer,
  bannerById: bannerByIdReducer,
  bannerEdit: bannerEditReducer,
  adminMessage: adminMessageSliceReducer,
  productId: productIdReducer,
  products: productsReducer,
  createProduct: createProductReducer,
  editProduct: editProductReducer,
  productDelete: productDeleteReducer,
  category: categoryReducer,
  createPurposeCategory: createPurposeCategoryReducer,
  createTypeCategory: createTypeCategoryReducer,
  purposeCategoryById: purposeCategoryByIdReducer,
  purposeEdit: purposeEditReducer,
  purposeDelete: purposeDeleteReducer,
  types: typesReducer,
  typeById: typeByIdReducer,
  typeEdit: typeEditReducer,
  typeDelete: typeDeleteReducer,
  promocodeList: promocodeListReducer,
  promocodeCreate: promocodeCreateReducer,
  promocodeById: promocodeByIdReducer,
  promocodeEdit: promocodeEditReducer,
  promocodeDelete: promocodeDeleteReducer,
  reviews: reviewReducer,
  addReview: addReviewReducer,
  contactsEdit: contactsEditReducer,
  adminProductSearch: adminProductSearchReducer,
  adminReviewsSearch: adminReviewsSearchReducer,
  usersList: usersListReducer,
  userDelete: userDeleteReducer,
  userCreate: userCreateReducer,
  userEdit: userEditReducer,
  userById: userByIdReducer,
};
