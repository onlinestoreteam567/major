import { useEffect } from 'react';
import AppRouter from './router/AppRouter';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { fetchBestSellers } from '@services/bestSellersService';
import { fetchProductList } from '@services/ProductListService';
import { fetchTypes } from '@services/TypeService';

function App() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();

  // Make a request to the server whevenever  the component mounts or the language changes
  useEffect(() => {
    dispatch(fetchProductList());
    dispatch(fetchBestSellers());
    dispatch(fetchTypes());
  }, [i18n.language, dispatch]);

  return <AppRouter />;
}

export default App;
