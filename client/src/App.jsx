import { useEffect } from 'react';
import AppRouter from './router/AppRouter';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
// import { fetchBestSellers } from '@services/bestSellersService';
// import { fetchProductList } from '@services/ProductListService';
// import { fetchTypes } from '@../servicesold/TypeService';
// import { fetchSets } from './servicesold/SetsService';
// import { fetchPurposeCategories } from '@../servicesold/PurposeCategoryService';
import { fetchBestSellers, fetchProductsAll, fetchSets } from './redax/products/service';
import { fetchCategories, fetchTypes } from './redax/params/service';

function App() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  // Make a request to the server whevenever  the component mounts or the language changes
  useEffect(() => {
    // Product list
    dispatch(fetchProductsAll());

    dispatch(fetchBestSellers());
    dispatch(fetchSets());

    dispatch(fetchTypes());
    // dispatch(fetchPurposeCategories());
    dispatch(fetchCategories());
  }, [i18n.language, dispatch]);

  return <AppRouter />;
}

export default App;
