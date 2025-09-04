# Project Structure Documentation

This document provides an overview of the project's folder structure and a brief description of each directory and its contents.

## Overview

The project is structured to maintain a clear separation of concerns, making it easy to understand and maintain. Below is a breakdown of each directory and its purpose.

## Directory Structure

public/ # Static files (images, icons, locales)
│
│ ├── images/ # Product images, banners, etc.
│ ├── icons/ # SVG or other icons
│ └── locales/ translation files for internationalization (i18n)

src/
│
├── components/ # Reusable components
│ ├── admin/ # almost all components for admin panel
│ │ ├── AdminCropperImage/
│ │ │ ├── AdminCropperImage
│ │ │ ├── index.module.scss
│ │ │ ├── helpers/
│ │ │ │ ├── deleteCroppedImage.js
│ │ │ │ ├── handleCroppedImage.js
│ │ │ │ └── handleImageUpload.js
│ │ │ ├── CropperContainerWrapper/
│ │ │ │ ├── CropperContainerWrapper.jsx
│ │ │ │ └── index.module.scss
│ │ │ ├── ImagesSlider/
│ │ │ │ ├── ImagesSlider.jsx
│ │ │ │ └── index.module.scss
│ │ │
│ │ ├── AdminFormActions/
│ │ │ ├── AdminFormActions.jsx
│ │ │ └── index.module.scss
│ │
│ │ ├── AdminLoginPage/
│ │ │ ├── AdminLoginPage.jsx
│ │ │ └── index.module.scss
│ │
│ │ ├── AdminMessage/
│ │ │ ├── AdminMessage.jsx
│ │ │ └── index.module.scss
│ │
│ │ ├── AdminNavigation/
│ │ │ ├── AdminNavigation.jsx
│ │ │ ├── index.module.scss
│ │ │ ├── helpers
│ │ │ │ └── handleExpand.js
│ │ │ ├── hooks
│ │ │ │ └── useCategoryActive.jsx
│ │
│ │ ├── BannerManagement/
│ │ │ ├── BannerManagement.jsx
│ │ │ ├── index.module.scss
│ │ │ │ ├── BannerCreate/
│ │ │ │ │ ├── BannerCreate.jsx
│ │ │ │ │ └── index.module.scss
│ │ │ │ ├── BannerEdit/
│ │ │ │ │ ├── BannerEdit.jsx
│ │ │ │ │ └── index.module.scss
│ │ │ │ ├── BannerForm/
│ │ │ │ │ ├── BannerForm.jsx
│ │ │ │ │ └── BannerProductSelect.jsx
│ │ │ │ ├── BannerList/
│ │ │ │ │ ├── BannerList.jsx
│ │ │ │ │ └── index.module.scss
│ │
│ │ ├── CategoriesManagement/
│ │ │ ├── CategoriesManagement.jsx
│ │ │ ├── index.module.scss
│ │ │ │ ├── CategoryCreate/
│ │ │ │ ├── index.module.scss
│ │ │ │ ├── Purpose/
│ │ │ │ │ ├── PurposeForm.jsx
│ │ │ │ │ └── index.module.scss
│ │ │ │ │ ├── PurposeCreate/
│ │ │ │ │ │ ├── PurposeCreate.jsx
│ │ │ │ │ │ └── index.module.scss
│ │ │ │ │ ├── PurposeEdit/
│ │ │ │ │ │ ├── PurposeEdit.jsx
│ │ │ │ │ │ └── index.module.scss
│ │ │ │ │ ├── PurposeList/
│ │ │ │ │ │ ├── PurposeList.jsx
│ │ │ │ │ │ └── index.module.scss
│ │ │ │ │ │ ├── PurposeCategoryItem/
│ │ │ │ │ │ │ ├── PurposeCategoryItem.jsx
│ │ │ │ │ │ │ └── index.module.scss
│ │ │ │ ├── Type/
│ │ │ │ │ ├── TypeForm.jsx
│ │ │ │ │ ├── index.module.scss
│ │ │ │ │ ├── TypeCreate/
│ │ │ │ │ │ ├── TypeCreate.jsx
│ │ │ │ │ │ └── index.module.scss
│ │ │ │ │ ├── TypeEdit/
│ │ │ │ │ │ ├── TypeEdit.jsx
│ │ │ │ │ │ └── index.module.scss
│ │ │ │ │ ├── TypeList/
│ │ │ │ │ │ ├── TypeList.jsx
│ │ │ │ │ │ ├── index.module.scss
│ │ │ │ │ │ ├── TypeCategoryItem/
│ │ │ │ │ │ │ ├── TypeCategoryItem.jsx
│ │ │ │ │ │ │ └── index.module.scss
│ │
│ │ ├── ContactsManagement/
│ │ │ ├── ContactsManagement.jsx
│ │ │ ├── index.module.scss
│ │ │ ├── ContactsForm/
│ │ │ │ ├── ContactsForm.jsx
│ │ │ │ └── index.module.scss
│ │
│ │ ├── CustomSelect/
│ │ │ ├── CustomSelect.jsx
│ │ │ └── index.module.scss
│ │
│ │ ├── DeletePopUp/
│ │ │ ├── DeletePopUp.jsx
│ │ │ └── index.module.scss
│ │
│ │ ├── ErrorText/
│ │ │ ├── ErrorText.jsx
│ │ │ └── index.module.scss
│ │
│ │ ├── ImageUpload/
│ │ │ ├── ImageUpload.jsx
│ │ │ ├── index.module.scss
│ │ │ ├── ImagePreview/
│ │ │ │ ├── ImagePreview.jsx
│ │ │ │ └── index.module.scss
│ │
│ │ ├── PartnersManagement/
│ │ │ ├── PartnersManagement.jsx
│ │ │ ├── index.module.scss
│ │ │ ├── PartnerCreate/
│ │ │ │ ├── PartnerCreate.jsx
│ │ │ │ └── index.module.scss
│ │ │ ├── PartnerEdit/
│ │ │ │ ├── PartnerEdit.jsx
│ │ │ │ └── index.module.scss
│ │ │ ├── PartnersForm/
│ │ │ │ ├── PartnersForm.jsx
│ │ │ │ ├── index.module.scss
│ │ │ │ ├── AdminPartnersMap/
│ │ │ │ │ ├── AdminPartnersMap.jsx
│ │ │ │ │ └── index.module.scss
│ │
│ │ ├── ProductManagement/
│ │ ├── ProductManagement.jsx
│ │ ├── index.module.scss
│ │ ├── ProductCreate/
│ │ │ ├── ProductCreate.jsx
│ │ │ ├── index.module.scss
│ │ │ ├── helpers/
│ │ │ │ ├── calculateDiscountedPrice.js
│ │ │ │ └── useProductForm.jsx
│ │ ├── ProductEdit/
│ │ │ ├── ProductEdit.jsx
│ │ │ ├── index.module.scss
│ │ │ ├── helpers/
│ │ │ │ ├── setFormValues.js
│ │ │ │ ├── useEditProductForm.jsx
│ │ │ │ └── useFetchProductData.jsx
│ │ ├── ProductForm/
│ │ │ ├── ProductForm.jsx
│ │ │ ├── index.module.scss
│ │ │ ├── ProductCheckbox/
│ │ │ │ ├── ProductCheckbox.jsx
│ │ │ │ └── index.module.scss
│ │ │ ├── ProductDetailsTabs/
│ │ │ │ ├── ProductDetailsTabs.jsx
│ │ │ │ ├── index.module.scss
│ │ │ │ ├── ProductDetailsTextarea/
│ │ │ │ │ ├── ProductDetailsTextarea.jsx
│ │ │ │ │ └── index.module.scss
│ │ │
│ │ │ ├── ProductTextArea/
│ │ │ │ ├── ProductTextArea.jsx
│ │ │ │ └── index.module.scss
│ │ │ ├── CategorySelect/
│ │ │ │ ├── CategorySelect.jsx
│ │ │ │ ├── index.module.scss
│ │ │ │ ├── CustomMultiSelect/
│ │ │ │ │ ├── CustomMultiSelect.jsx
│ │ │ │ │ ├── index.module.scss
│ │ │ │ │ ├── helpers/
│ │ │ │ │ │ └── handleToggleOption.js
│ │ │ │ │ ├── CustomSelectDisplay/
│ │ │ │ │ │ ├── CustomSelectDisplay.jsx
│ │ │ │ │ │ └── index.module.scss
│ │ │ │ │ ├── OptionsList/
│ │ │ │ │ │ ├── OptionsList.jsx
│ │ │ │ │ │ └── index.module.scss
│ │ │ │ │ ├── SelectedCategories/
│ │ │ │ │ │ ├── SelectedCategories.jsx
│ │ │ │ │ │ └── index.module.scss
│ │ │ ├── TypeSelect/
│ │ │ │ ├── TypeSelect.jsx
│ │ │ │ └── index.module.scss
│ │ │ ├── ProductList/
│ │ │ │ ├── ProductList.jsx
│ │ │ │ └── index.module.scss
│ │ │ ├── ProductSearch/
│ │ │ │ ├── ProductSearch.jsx
│ │ │ │ └── index.module.scss
│ │
│ │ ├── PromocodeManagement/
│ │ │ ├── PromocodeManagement.jsx
│ │ │ ├── index.module.scss
│ │ │ ├── PromocodeCreate/
│ │ │ │ ├── PromocodeCreate.jsx
│ │ │ │ └── index.module.scss
│ │ │ ├── PromocodeEdit/
│ │ │ │ ├── PromocodeEdit.jsx
│ │ │ │ └── index.module.scss
│ │ │ ├── PromocodeForm/
│ │ │ │ ├── PromocodeForm.jsx
│ │ │ │ ├── index.module.scss
│ │ │ │ ├── PromocodeInputDate/
│ │ │ │ │ ├── PromocodeInputDate.jsx
│ │ │ │ │ └── index.module.scss
│ │ │ ├── PromocodeList/
│ │ │ │ ├── PromocodeList.jsx
│ │ │ │ ├── index.module.scss
│ │ │ │ ├── PromocodeListItem/
│ │ │ │ │ ├── PromocodeListItem.jsx
│ │ │ │ │ └── index.module.scss
│ │ │ │ ├── PromocodeSelect/
│ │ │ │ │ ├── PromocodeSelect.jsx
│ │ │ │ │ ├── index.module.scss
│ │ │ │ │ ├── PromocodeSelectOptions/
│ │ │ │ │ │ ├── PromocodeSelectOptions.jsx
│ │ │ │ │ │ └── index.module.scss
│ │
│ │ ├── ReviewsManagement/
│ │ │ ├── ReviewsManagement.jsx
│ │ │ ├── index.module.scss
│ │ │ ├── ReviewsList/
│ │ │ │ ├── ReviewsList.jsx
│ │ │ │ ├── index.module.scss
│ │ │ │ ├── ReviewListItem/
│ │ │ │ │ ├── ReviewListItem.jsx
│ │ │ │ │ └── index.module.scss
│ │ │ ├── ReviewsSearch/
│ │ │ │ ├── ReviewsSearch.jsx
│ │ │ │ └── index.module.scss
│ │ │ ├── ReviewsSelect/
│ │ │ │ ├── ReviewsSelect.jsx
│ │ │ │ ├── index.module.scss
│ │ │ │ ├── ReviewSelectOptions/
│ │ │ │ │ ├── ReviewSelectOptions.jsx
│ │ │ │ │ └── index.module.scss
│ │
│ │ ├── SuccessMessage/
│ │ │ ├── SuccessMessage.jsx
│ │ │ └── index.module.scss
│ │
│ │ ├── ValidationErrorMessage/
│ │ │ ├── ValidationErrorMessage
│ │ │ └── index.module.scss
│
│ ├── constants/
│ │ └── settingSlider.js
│
│ ├── Footer/
│ │ ├── Footer.jsx
│ │ ├── index.module.scss
│ │ ├── FooterCopyrightSection/
│ │ │ ├── FooterCopyrightSection.jsx
│ │ │ └── index.module.scss
│ │ ├── FooterTopSection/
│ │ │ ├── FooterTopSection.jsx
│ │ │ ├── index.module.scss
│ │ │ ├── FooterInfo/
│ │ │ │ ├── FooterInfo.jsx
│ │ │ │ └── index.module.scss
│ │ │ ├── FooterNavigation/
│ │ │ │ ├── FooterNavigation.jsx
│ │ │ │ ├── index.module.scss
│ │ │ │ ├── Navlink/
│ │ │ │ │ ├── Navlink.jsx
│ │ │ │ │ └── index.module.scss
│
│ ├── form-components/
│ │ ├── index.js
│ │
│ │ ├── Checkbox/
│ │ │ ├── Checkbox.jsx
│ │ │ └── index.module.scss
│ │
│ │ ├── Editor / # Currently unused component, will be using for Blogs in the future
│ │ │ ├── Editor.jsx
│ │ │ ├── index.module.scss
│ │ │ ├── helpers/
│ │ │ │ └── extensions.js
│ │ │ ├── Formatting/
│ │ │ │ ├── Formatting.jsx
│ │ │ │ ├── index.module.scss
│ │ │ │ ├── Toolbar/
│ │ │ │ ├── Toolbar.jsx
│ │ │ │ ├── index.module.scss
│ │ │ │ ├── YouTubeLink.jsx
│ │ │ │ ├── SearchAndReplace.jsx
│ │ │ │ ├── hooks/
│ │ │ │ │ └── useEditorCommands.jsx
│ │ │ │ ├── UploadImagePopUp/
│ │ │ │ │ ├── UploadImagePopUp.jsx
│ │ │ │ │ └── index.module.scss
│ │
│ │ ├── Input/
│ │ │ ├── Input.jsx
│ │ │ ├── index.module.scss
│ │ │ ├── PhoneNumberInput/
│ │ │ │ ├── PhoneNumberInput.jsx
│ │ │ │ ├── eventHandlers/
│ │ │ │ │ ├── handleInputChange.js
│ │ │ │ │ ├── handleInputCursorPosition.js
│ │ │ │ │ ├── handleInputDelete.js
│ │ │ │ │ ├── handleKeyDown.js
│ │ │ │ │ └── index.js
│ │
│ │ ├── Textarea/
│ │ │ ├── Textarea.jsx
│ │ │ └── index.module.scss
│
│ ├── Header/
│ │ ├── Header.jsx
│ │ ├── index.module.scss
│ │ ├── HeaderCart/
│ │ │ ├── HeaderCart.jsx
│ │ │ ├── index.module.scss
│ │ │ ├── HeaderCartEmpty/
│ │ │ │ ├── HeaderCartEmpty.jsx
│ │ │ │ └── index.module.scss
│ │ │ ├── HeaderCartFilled/
│ │ │ │ ├── HeaderCartFilled.jsx
│ │ │ │ ├── index.module.scss
│ │ │ │ ├── HeaderCartItem/
│ │ │ │ │ ├── HeaderCartItem.jsx
│ │ │ │ │ └── index.module.scss
│ │ │ ├── HeaderCartTopSection/
│ │ │ │ ├── HeaderCartTopSection.jsx
│ │ │ │ └── index.module.scss
│ │ ├── HeaderRightControls/
│ │ │ ├── HeaderRightControls.jsx
│ │ │ └── index.module.scss
│ │ ├── HeaderSearch/
│ │ │ ├── HeaderSearch.jsx
│ │ │ ├── index.module.scss
│ │ │ ├── DesktopSearch.jsx
│ │ │ ├── MobileSearch/
│ │ │ │ ├── MobileSearch.jsx
│ │ │ │ └── index.module.scss
│ │ │ ├── SearchInput/
│ │ │ │ ├── SearchInput.jsx
│ │ │ │ ├── index.module.scss
│ │ │ │ ├── SearchResults/
│ │ │ │ │ ├── SearchResults.jsx
│ │ │ │ │ ├── index.module.scss
│ │ │ │ │ ├── SearchNotFound/
│ │ │ │ │ │ ├── SearchNotFound.jsx
│ │ │ │ │ │ └── index.module.scss
│ │ ├── NavDrawer/
│ │ │ ├── NavDrawer.jsx
│ │ │ ├── index.module.scss
│ │ │ ├── LangSwitcher/
│ │ │ │ ├── LangSwitcher.jsx
│ │ │ │ └── index.module.scss
│
│ ├── UI/
│ │ ├── Button/
│ │ │ ├── Button.jsx
│ │ │ ├── index.module.scss
│ │ │ ├── ButtonAddToCart.jsx
│ │ │ ├── BtnSubmit.jsx
│ │ │ ├── ButtonAriaLabel.jsx
│ │ │ ├── ButtonClose/
│ │ │ │ ├── ButtonClose.jsx
│ │ │ │ └── index.module.scss
│ │
│ │ ├── EmptyText/
│ │ │ ├── EmptyText.jsx
│ │ │ └── index.module.scss
│ │
│ │ ├── icons
│ │ │ ├── Admin/
│ │ │ │ ├── Arrow/
│ │ │ │ │ ├── Arrow.jsx
│ │ │ │ │ └── ArrowImages.jsx
│ │ │ │ ├── CheckedCheckbox/
│ │ │ │ │ ├── CheckedCheckbox.jsx
│ │ │ │ │ └── index.module.scss
│ │ │ │ ├── Radios/
│ │ │ │ │ ├── CheckedRadio/
│ │ │ │ │ │ ├── CheckedRadio.jsx
│ │ │ │ │ │ └── index.module.scss
│ │ │ │ │ ├── UncheckedRadio/
│ │ │ │ │ │ ├── UncheckedRadio.jsx
│ │ │ │ │ │ └── index.module.scss
│ │ │ │ ├── UncheckedCheckbox/
│ │ │ │ │ ├── UncheckedCheckbox.jsx
│ │ │ │ │ └── index.module.scss
│ │ │ │ └── ArrowAcordion.jsx
│ │ │ ├── ArrowLink/
│ │ │ │ ├── ArrowLink.jsx
│ │ │ │ └── index.module.scss
│ │ │ ├── CatalogPage/
│ │ │ │ ├── Filters.jsx
│ │ │ │ └── Sorting.jsx
│ │ │ ├── Header/
│ │ │ │ ├── LogoIcon/
│ │ │ │ │ ├── LogoIcon.jsx
│ │ │ │ │ └── index.module.scss
│ │ │ │ ├── BagIcon.jsx
│ │ │ │ ├── BurgerIcon.jsx
│ │ │ │ ├── EnIcon.jsx
│ │ │ │ ├── SearchIcon.jsx
│ │ │ │ └── UaIcon.jsx
│ │ │ ├── Stars/
│ │ │ │ ├── StarTrue.jsx
│ │ │ │ ├── StarFalse.jsx
│ │ │ │ └── index.module.scss
│ │ │ ├── ArrowLeft.jsx
│ │ │ ├── ArrowRight.jsx
│ │ │ ├── ButtonMinus.jsx
│ │ │ ├── ButtonPlus.jsx
│ │ │ ├── LineSeparator.jsx
│ │ │ ├── ZoomIn.jsx
│ │ │ ├── ZoomOut.jsx
│ │
│ │ ├── Labels/
│ │ │ ├── LabelHit.jsx
│ │ │ ├── LabelNew.jsx
│ │ │ ├── LabelSale.jsx
│ │ │ └── index.module.scss
│ │
│ │ ├── Overlay/
│ │ │ ├── Overlay.jsx
│ │ │ └── index.module.scss
│ │
│ │ ├── ProductCard/
│ │ │ ├── ProductCard.jsx
│ │ │ ├── index.module.scss
│ │ │ ├── ProductCardImage/
│ │ │ │ ├── ProductCardImage.jsx
│ │ │ │ └── index.module.scss
│ │ │ ├── ProductCardPrice/
│ │ │ │ ├── ProductCardPrice.jsx
│ │ │ │ └── index.module.scss
│ │ │ ├── ProductCardTitle/
│ │ │ │ ├── ProductCardTitle.jsx
│ │ │ │ └── index.module.scss
│ │
│ │ ├── ProductListOrSlider/
│ │ │ ├── ProductListOrSlider.jsx
│ │ │ ├── index.module.scss
│ │ │ ├── ProductList/
│ │ │ │ ├── ProductList.jsx
│ │ │ │ └── index.module.scss
│ │
│ │ ├── ProductPrice/
│ │ │ ├── ProductPrice.jsx
│ │ │ └── index.module.scss
│ │
│ │ ├── ProductRating/
│ │ │ ├── ProductRating.jsx
│ │ │ └── index.module.scss

│ │ ├── SliderBoxMain/
│ │ │ ├── SliderBoxMain.jsx
│ │ │ └── index.module.scss
│ │ │
│ │ ├── SocialLinks/
│ │ │ ├── SocialLinks.jsx
│ │ │ └── index.module.scss
│ │
│ │ ├── Spinner/
│ │ │ ├── Spinner.jsx
│ │ │ └── index.module.scss
│ │
│ │ ├── Stars/
│ │ │ ├── Stars.jsx
│ │ │ └── index.module.scss
│ │
│ │ ├── Texts/
│ │ │ ├── Heading/
│ │ │ │ ├── Heading.jsx
│ │ │ │ └── index.module.scss
│ │ │ ├── Paragraph/
│ │ │ │ ├── Paragraph.jsx
│ │ │ │ └── index.module.scss
│
│ ├── config/ # Configuration files
│ │ ├── apiClient.js # API configuration
│ │ ├── i18next.js
│ │ └── store.js # Redux store configuration
│
├── hooks/ # Custom hooks
│ ├── admin/
│ │ ├── useClickOutside.jsx
│ │ └── useTimedMessage.jsx.jsx
│ │ ├── useScreenSizes/
│ │ │ ├── useScreenSizes.jsx
│ │ │ └── useMediaQuery.jsx
│ │ ├── useIdFromUrl.jsx
│ │ └── useTranslationNamespace.jsx
│
│ ├── pages/ # Pages tied to routes
│ │ ├── AboutPage/
│ │ │ ├── AboutPage.jsx
│ │ │ ├── index.module.scss
│ │ │ │ ├── AboutBanner/
│ │ │ │ │ ├── AboutBanner.jsx
│ │ │ │ │ └── index.module.scss
│ │ │ │ ├── BrandValues/
│ │ │ │ │ ├── BrandValues.jsx
│ │ │ │ │ └── index.module.scss
│ │ │ │ ├── Formula/
│ │ │ │ │ ├── Formula.jsx
│ │ │ │ │ └── index.module.scss
│ │ │ │ ├── KeyBenefits/
│ │ │ │ │ ├── KeyBenefits.jsx
│ │ │ │ │ ├── index.module.scss
│ │ │ │ │ ├── keyBenefitsArray.js
│ │ │ │ │ ├── BannerBenefits/
│ │ │ │ │ │ ├── BannerBenefits
│ │ │ │ │ │ ├── index.module.scss
│ │ │ │ │ ├── PaginatedBenefits/
│ │ │ │ │ │ ├── PaginatedBenefits
│ │ │ │ │ │ └── index.module.scss
│ │ │ │ ├── MissionSection/
│ │ │ │ │ ├── MissionSection.jsx
│ │ │ │ │ └── index.module.scss
│ │ │ │ ├── OriginStorySection/
│ │ │ │ │ ├── OriginStorySection.jsx
│ │ │ │ │ └── index.module.scss
│ │ │ │ ├── OurProduction/
│ │ │ │ │ ├── OurProduction.jsx
│ │ │ │ │ └── index.module.scss
│ │ │ │ ├── YourTimeIsPriceless/
│ │ │ │ │ ├── YourTimeIsPriceless.jsx
│ │ │ │ │ └── index.module.scss

│ │ ├── CatalogPage/
│ │ │ ├── CatalogPage.jsx
│ │ │ ├── index.module.scss
│ │ │ ├── CatalogFilters/
│ │ │ │ ├── CatalogFilters.jsx
│ │ │ │ ├── index.module.scss
│ │ │ │ ├── FilterByPrice/
│ │ │ │ │ ├── FilterByPrice.jsx
│ │ │ │ │ ├── index.module.scss
│ │ │ │ │ ├── helpers/
│ │ │ │ │ │ ├── getByPrice.js
│ │ │ │ │ │ ├── handleMaxInputChange.js
│ │ │ │ │ │ ├── handleMinInputChange.js
│ │ │ │ │ │ ├── handleSliderMaxChange.js
│ │ │ │ │ │ └─ handleSliderMinChange.js
│ │ │ │ │ ├── RangeSlider/
│ │ │ │ │ │ ├── RangeSlider.jsx
│ │ │ │ │ │ └─ index.module.scss
│ │ │ │ ├── FilterByStatus/
│ │ │ │ │ ├── FilterByStatus.jsx
│ │ │ │ │ └─ index.module.scss
│ │ │ │ ├── FilterByType/
│ │ │ │ │ ├── FilterByType.jsx
│ │ │ │ │ └─ index.module.scss
│ │ │ ├── CatalogProductList/
│ │ │ │ ├── CatalogProductList.jsx
│ │ │ │ └─ index.module.scss
│ │ │ ├── CatalogTop/
│ │ │ │ ├── CatalogTop.jsx
│ │ │ │ ├── index.module.scss
│ │ │ │ ├── CatalogSorting/
│ │ │ │ │ ├── CatalogSorting.jsx
│ │ │ │ │ ├── index.module.scss
│ │ │ │ │ └─ SortingButtons.jsx
│ │ │ ├── FilterCategory/
│ │ │ │ ├── FilterByCategory.jsx
│ │ │ │ ├── index.module.scss
│ │ │ │ ├── CategoryCard/
│ │ │ │ │ ├── CategoryCard/
│ │ │ │ │ └─ index.module.scss
│ │
│ │ ├── CheckoutPage/
│ │ │ ├── CheckoutPage.jsx
│ │ │ ├── index.module.scss
│ │ │ ├── CheckoutBreadCrumbs/
│ │ │ │ ├── CheckoutBreadCrumbs.jsx
│ │ │ │ └── index.module.scss
│ │ │ ├── CheckoutCart/
│ │ │ │ ├── CheckoutCart.jsx
│ │ │ │ ├── index.module.scss
│ │ │ │ ├── helpers/
│ │ │ │ │ └── calculateDiscountedItems.js
│ │ │ │ ├── CheckoutCartItem/
│ │ │ │ │ ├── CheckoutCartItem.jsx
│ │ │ │ │ └── index.module.scss
│ │ │ │ ├── Promocode/
│ │ │ │ │ ├── Promocode.jsx
│ │ │ │ │ ├── index.module.scss
│ │ │ ├── CheckoutSteps/
│ │ │ │ ├── CheckoutSteps.jsx
│ │ │ │ ├── index.module.scss
│ │ │ │ │ ├── ContactInformation/
│ │ │ │ │ │ ├── ContactInformation.jsx
│ │ │ │ │ │ └── index.module.scss
│ │ │ │ │ ├── ContactInformationInput/
│ │ │ │ │ │ ├── ContactInformationInput.jsx
│ │ │ │ │ │ └── index.module.scss
│ │ │ │ │ ├── Payment/
│ │ │ │ │ │ ├── Payment.jsx
│ │ │ │ │ │ ├── index.module.scss
│ │ │ │ │ │ ├── PaymentCheckbox/
│ │ │ │ │ │ │ ├── PaymentCheckbox.jsx
│ │ │ │ │ │ │ └── index.module.scss
│ │ │ │ │ ├── Shipping/
│ │ │ │ │ │ ├── Shipping.jsx
│ │ │ │ │ │ ├── index.module.scss
│ │ │ │ │ │ ├── ShippingInfo.jsx
│ │ │ │ │ │ ├── helpers/
│ │ │ │ │ │ │ └── handleContinueClick.js
│ │ │ │ │ │ ├── hooks/
│ │ │ │ │ │ │ └── useShippingLogic.jsx
│ │ │ │ │ │ ├── NovaPost/
│ │ │ │ │ │ │ ├── NovaPost.jsx
│ │ │ │ │ │ │ ├── index.module.scss
│ │ │ │ │ │ │ ├── Settlement.jsx
│ │ │ │ │ │ │ └── Warehouses.jsx
│ │ │ │ │ │ ├── ShippingTextArea/
│ │ │ │ │ │ │ ├── ShippingTextArea.jsx
│ │ │ │ │ │ │ └── index.module.scss
│ │
│ │ ├── ErrorPage/
│ │ │ ├── ErrorPage.jsx
│ │ │ └── index.module.scss
│ │
│ │ ├── HomePage/
│ │ │ ├── HomePage.jsx
│ │ │ ├── index.module.scss
│ │ │ │ ├── Comments/
│ │ │ │ │ ├── Comments.jsx
│ │ │ │ │ ├── index.module.scss
│ │ │ │ │ ├── CommentCard/
│ │ │ │ │ │ ├── CommentCard.jsx
│ │ │ │ │ │ └── index.module.scss
│ │ │ │ ├── HomeCatalogSection/
│ │ │ │ │ ├── HomeCatalogSection.jsx
│ │ │ │ │ └── index.module.scss
│ │ │ │ ├── MainBanner/
│ │ │ │ │ ├── MainBanner.jsx
│ │ │ │ │ ├── index.module.scss
│ │ │ │ │ ├── Slide/
│ │ │ │ │ │ ├── Slide.jsx
│ │ │ │ │ │ └── index.module.scss
│ │ │ │ ├── MainSliders/
│ │ │ │ │ ├── BestSellers.jsx
│ │ │ │ │ ├── Sets.jsx
│ │ │ │ │ └── index.module.scss
│ │ │ │ ├── MajorInfo/
│ │ │ │ │ ├── MajorInfo.jsx
│ │ │ │ │ └── index.module.scss
│ │ │ │ ├── OurPartners/
│ │ │ │ │ ├── OurPartners.jsx
│ │ │ │ │ ├── index.module.scss
│ │ │ │ │ ├── Map/
│ │ │ │ │ │ ├── Map.jsx
│ │ │ │ │ │ ├── index.module.scss
│ │ │ │ │ │ ├── eventHandlers/
│ │ │ │ │ │ │ ├── handleStart.js
│ │ │ │ │ │ │ ├── handleEnd.js
│ │ │ │ │ │ │ ├── handleMove.js
│ │ │ │ │ │ │ ├── handleWheel.js
│ │ │ │ │ │ │ ├── handleZoomIn.js
│ │ │ │ │ │ │ └── handleZoomOut.js
│ │ │ │ │ │ ├── PartnerInfo/
│ │ │ │ │ │ │ ├── PartnerInfo.jsx
│ │ │ │ │ │ │ └── index.module.scss
│ │ │ │ ├── WhyChooseUs/
│ │ │ │ │ ├── WhyChooseUs.jsx
│ │ │ │ │ └── index.module.scss
│ │ │ │ ├── YellowButton/
│ │ │ │ │ ├── YellowButton.jsx
│ │ │ │ │ ├── index.module.scss
│ │ │ │ │ ├── QuestionPopUp/
│ │ │ │ │ │ ├── QuestionPopUp.jsx
│ │ │ │ │ │ └── index.module.scss
│ │
│ │ ├── NotFoundPage/
│ │ │ ├── NotFoundPage.jsx
│ │ │ └── index.module.scss
│ │
│ │ ├── ProductPage/
│ │ │ ├── ProductPage.jsx
│ │ │ ├── index.module.scss
│ │ │ ├── ProductPageCard/
│ │ │ │ ├── ProductPageCard.jsx
│ │ │ │ ├── index.module.scss
│ │ │ │ ├── DesktopView.jsx
│ │ │ │ ├── MobileView.jsx
│ │ │ │ ├── ProductPageCardDetails/
│ │ │ │ │ ├── ProductPageCardArticle/
│ │ │ │ │ │ ├── ProductPageCardArticle.jsx
│ │ │ │ │ │ └── index.module.scss
│ │ │ │ │ ├── ProductPageCardCounter/
│ │ │ │ │ │ ├── ProductPageCardCounter.jsx
│ │ │ │ │ │ └── index.module.scss
│ │ │ │ │ ├── ProductPageCardDescription/
│ │ │ │ │ │ ├── ProductPageCardDescription.jsx
│ │ │ │ │ │ └── index.module.scss
│ │ │ │ │ ├── ProductPageCardDescription/
│ │ │ │ │ │ ├── ProductPageCardDescription.jsx
│ │ │ │ │ │ └── index.module.scss
│ │ │ │ │ ├── ProductPageCardImage/
│ │ │ │ │ │ ├── SliderImgs.jsx
│ │ │ │ │ │ ├── index.module.scss
│ │ │ │ │ │ ├── CardLabels.jsx
│ │ │ │ │ │ ├── ImgDesk/
│ │ │ │ │ │ │ ├── ImgDesk.jsx
│ │ │ │ │ │ │ └── index.module.scss
│ │ │ │ │ │ ├── ImgMobile/
│ │ │ │ │ │ │ ├── ImgMobile.jsx
│ │ │ │ │ │ │ └── index.module.scss
│ │ │ │ │ ├── ProductPageCardPrice/
│ │ │ │ │ │ ├── ProductPageCardPrice.jsx
│ │ │ │ │ │ └── index.module.scss
│ │ │ │ │ ├── ProductPageCardTitle/
│ │ │ │ │ │ ├── ProductPageCardTitle.jsx
│ │ │ │ │ │ └── index.module.scss
│ │ │ │ │ ├── ProductVolume/
│ │ │ │ │ │ ├── ProductVolume.jsx
│ │ │ │ │ │ └── index.module.scss
│ │ │ │
│ │ │ │ ├── ReviewPopUp/
│ │ │ │ │ ├── ReviewPopUp.jsx
│ │ │ │ │ ├── index.module.scss
│ │ │ │ │ └── StarsCheckbox.jsx
│ │ │ │
│ │ │ │ ├── Reviews/
│ │ │ │ │ ├── Reviews.jsx
│ │ │ │ │ ├── index.module.scss
│ │ │ │ │ │ ├── LeaveReview/
│ │ │ │ │ │ │ ├── LeaveReview.jsx
│ │ │ │ │ │ │ └── index.module.scss
│ │ │ │ │ │ ├── ReviewsCard/
│ │ │ │ │ │ │ ├── ReviewsCard.jsx
│ │ │ │ │ │ │ └── index.module.scss
│ │ │ │ │ │ ├── ReviewsNotFound/
│ │ │ │ │ │ │ ├── ReviewsNotFound.jsx
│ │ │ │ │ │ │ └── index.module.scss
│ │ │ │ │ │ ├── UserRating/
│ │ │ │ │ │ │ ├── UserRating.jsx
│ │ │ │ │ │ │ └── index.module.scss
│ │ │
│ │ │ ├── Sliders/
│ │ │ │ ├── FitCategory.jsx
│ │ │ │ ├── ProductSet.jsx
│ │ │ │ ├── ProductLook.jsx
│ │ │ │ └── index.module.scss
│
│ ├── redux/ # redux slices
│ │ ├── selectors.js
│ │ ├── admin/
│ │ │ ├── auth/
│ │ │ │ ├── authSlice.js
│ │ │ │ └── service.js
│ │ │ ├── product/
│ │ │ │ ├── createProductSlice.js
│ │ │ │ ├── editProductSlice.js
│ │ │ │ ├── productDeleteSlice.js
│ │ │ │ └── service.js
│ │ │ ├── product/
│ │ │ │ ├── promocodeByIdSlice.js
│ │ │ │ ├── promocodeCreateSlice.js
│ │ │ │ ├── promocodeDeleteSlice.js
│ │ │ │ ├── promocodeEditSlice.js
│ │ │ │ ├── promocodeListSlice.js
│ │ │ │ └── service.js
│ │ │ ├── purpose/
│ │ │ │ ├── createPurposeCategorySlice.js
│ │ │ │ ├── purposeCategoryByIdSlice.js
│ │ │ │ ├── purposeDeleteSlice.js
│ │ │ │ ├── purposeEditSlice.js
│ │ │ │ └── service.js
│ │ │ ├── search/
│ │ │ │ ├── adminProductSearchSlice.js
│ │ │ │ └── adminReviewsSearchSlice.js
│ │ │ ├── type/
│ │ │ │ ├── createTypeCategorySlice.js
│ │ │ │ ├── typeByIdSlice.js
│ │ │ │ ├── typeDeleteSlice.js
│ │ │ │ ├── typeEditSlice.js
│ │ │ │ └── service.js
│ │ │ └── adminMessageSlice.js
│ │
│ │ ├── banner/
│ │ │ ├── bannerByIdSlice.js
│ │ │ ├── bannerCreateSlice.js
│ │ │ ├── bannerDeleteSlice.js
│ │ │ ├── bannerEditSlice.js
│ │ │ ├── bannerSlice.js
│ │ │ └── service.js
│ │
│ │ ├── blogs/
│ │ │ ├── uploadImageSlice.js
│ │ │ └── service.js
│ │
│ │ ├── cart/
│ │ │ └── cartSlice.js
│ │
│ │ ├── filter/
│ │ │ └── FilterSlice.js
│ │
│ │ ├── novaPost/
│ │ │ ├── settlementsSlice.js
│ │ │ ├── warehousesSlice.js
│ │ │ └── service.js
│ │
│ │ ├── params/
│ │ │ ├── categorySlice.js
│ │ │ ├── purposeSlice.js
│ │ │ └── service.js
│ │
│ │ ├── partners/
│ │ │ ├── partnerByIdSlice.js
│ │ │ ├── partnerCreateSlice.js
│ │ │ ├── partnerDeleteSlice.js
│ │ │ ├── partnerEditSlice.js
│ │ │ ├── partnerSlice.js
│ │ │ └── service.js
│ │
│ │ ├── products/
│ │ │ ├── bestSlice.js
│ │ │ ├── cardSlice.js
│ │ │ ├── fitCategorySlice.js
│ │ │ ├── listSlice.js
│ │ │ ├── searchSlice.js
│ │ │ ├── setsSlice.js
│ │ │ ├── viewedProductsSlice.js
│ │ │ └── service.js
│ │
│ │ ├── promocode/
│ │ │ ├── promocodeSlice.js
│ │ │ └── service.js
│ │
│ │ ├── reviews/
│ │ │ ├── addReviewSlice.js
│ │ │ ├── reviewSlice.js
│ │ │ └── service.js
│
├── router/ # Router and layouts
│ ├── AppRouter.jsx # Application's main routing logic
│ ├── AppLoader/
│ │ ├── AppLoader.jsx
│ │ └── index.module.scss
│ ├── error/
│ │ └── ErrorBoundary.jsx
│ │
│ └── layouts/ # Layout components
│ ├── MainLayout/ # Main layout for the application
│ │ ├── MainLayout.jsx
│ │ ├── index.module.scss
│ │ ├── hooks/
│ │ │ └── useScrollToTop
│
│ ├── ProtectedRoute/
│ │ ├── ProtectedRoute.jsx
│ │ ├── index.module.scss
│ │ ├── AdminGlobalMessage.jsx
│
├── styles/ # Global styles and variables
│ └── mixins.scss # Mixins and utility classes
│ └── variables.scss # SCSS variables
│
├── utils/ # Utility functions and helper scripts
│ ├── appendFormData.js
│ ├── changeLanguage.js
│ ├── handleCloseWithDelay.js
│ ├── handleImageUpload.js
│ ├── localStorage.js
│ └── setFormValue.js
│
│ ├── validations # yup form validations
│ │ ├── admin/
│ │ │ ├── bannerSchema.js
│ │ │ ├── categorySchema.js
│ │ │ ├── contactSchema.js
│ │ │ ├── partnerSchema.js
│ │ │ ├── productSchema.js
│ │ │ ├── promocodeSchema.js
│ │ │ └── typeSchema.js
│ │ ├── catalogFilterSchema.js
│ │ ├── checkoutSchema.js
│ │ ├── discountCodeSchema.js
│ │ ├── needHelpSchema.js
│ │ ├── productSchema.js
│ │ └── reviewSchema.js

├── App.jsx # Root component of the application
├── main.jsx # Entry point for React
└── index.scss # Base styles

.gitignore
.prettierrc
eslint.config.js
index.html
jsconfig.json
LICENSE
package-lock.json
package.json
README.md
vercel.json
vite.config.js

## Detailed Descriptions

### components/

Contains reusable UI components that can be used across the application. Components are organized into subdirectories for better management.

### config/

Houses configuration files for API settings and Redux store management.

### hooks/

Contains custom React hooks that encapsulate reusable logic for handling stateful behavior.

### pages/

Contains the main page components for routing within the application.

### redux/

Contains all redux slices.

### router/

Includes routing logic and layout components that define how different pages are rendered.

### styles/

Contains global styles, SCSS variables, and mixins for consistent styling across the application.

### utils/

Includes utility functions and constants that can be reused throughout the application.

### validations/

Contains all validations for form validations using yup

## How to Contribute

- Fork the repository
- Create a new branch for your feature or bug fix
- Make your changes
- Submit a pull request with a description of your changes
- Wait for approval

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For questions, please contact [onlinestoreteam567@gmail.com].
