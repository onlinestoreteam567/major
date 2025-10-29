import { useEffect, useState } from 'react';
import ProductPage from './ProductPage';
import { injectReducers } from '@config/store';
import { setsReducer } from '@redux/products/setsSlice';
import Spinner from '@components/UI/Spinner/Spinner';
import { productIdReducer } from '@redux/products/cardSlice';
import { fitCategoryReducer } from '@redux/products/fitCategorySlice';
import { addReviewReducer } from '@redux/reviews/addReviewSlice';

const ProductPageWrapper = () => {
  const [isReducerLoaded, setIsReducerLoaded] = useState(false);

  const productPageReducers = {
    productId: productIdReducer,
    sets: setsReducer,
    fitCategory: fitCategoryReducer,
    addReview: addReviewReducer,
  };

  useEffect(() => {
    injectReducers(productPageReducers);
    setIsReducerLoaded(true);
  }, []);

  return !isReducerLoaded ? <Spinner /> : <ProductPage />;
};
export default ProductPageWrapper;
