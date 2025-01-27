import ProductListService from '@services/ProductListService';
import AppRouter from './router/AppRouter';
import { useEffect } from 'react';

const fetchProductList = async () => {
  const bestSellers = await ProductListService.getProductList({ is_best_seller: true });
  console.log(bestSellers);
};

function App() {
  useEffect(() => {
    fetchProductList();
  }, []);

  return <AppRouter />;
}

export default App;
