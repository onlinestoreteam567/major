import { useDispatch } from 'react-redux';
import AppRouter from './router/AppRouter';
import { useEffect } from 'react';
import { fetchBestSellers } from '@features/products/bestSellersSlice';
import { useTranslation } from 'react-i18next';

function App() {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  useEffect(() => {
    dispatch(fetchBestSellers());
  }, [dispatch, i18n.language]);

  return <AppRouter />;
}

export default App;
