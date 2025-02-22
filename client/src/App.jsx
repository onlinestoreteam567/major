import { useEffect } from 'react';
import AppRouter from './router/AppRouter';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { fetchBestSellers, fetchProductsAll, fetchSets } from '@redux/products/service';
import { fetchCategories, fetchTypes } from '@redux/params/service';

function App() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  // Make a request to the server whevenever  the component mounts or the language changes
  useEffect(() => {
    dispatch(fetchProductsAll());
    dispatch(fetchBestSellers());
    dispatch(fetchSets());
    dispatch(fetchTypes());
    dispatch(fetchCategories());
  }, [i18n.language, dispatch]);

  return <AppRouter />;
}

export default App;
