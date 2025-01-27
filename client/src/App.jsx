import { useDispatch } from 'react-redux';
import AppRouter from './router/AppRouter';
import { useEffect } from 'react';
import { fetchBestSellers } from '@features/products/bestSellersSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBestSellers());
  }, [dispatch]);

  return <AppRouter />;
}

export default App;
