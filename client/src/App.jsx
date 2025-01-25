import ProductListService from '@services/ProductListService';
import AppRouter from './router/AppRouter';
import { useEffect } from 'react';

const fetchProductList = async () => {
  const data = await ProductListService.getProductList();
  console.log(data);
};

function App() {
  useEffect(() => {
    fetchProductList();
  }, []);

  return <AppRouter />;
}

export default App;
