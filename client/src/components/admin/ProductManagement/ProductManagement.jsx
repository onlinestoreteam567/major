import cl from './index.module.scss';
import List from './ProductList/ProductList';
import { Link } from 'react-router-dom';
import Button from '@components/UI/Button/Button';
import { selectFilteredProducts } from '@redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import Search from './Search/Search';
import { useEffect } from 'react';
import { filterProductsByName } from '@redux/products/listSlice';
import { fetchProductsAll } from '@redux/products/service';
const ProductManagement = () => {
  const items = useSelector(selectFilteredProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsAll());
    dispatch(filterProductsByName());
  }, [dispatch]);

  return (
    <div className={cl.productManagement}>
      <div className={items.length === 0 ? cl.empty : ''}>
        <p>Товари ({items.length})</p>
        <Link to={`/admin/products/create`}>
          <Button>Додати товар</Button>
        </Link>
        <Search />
      </div>
      <List />
    </div>
  );
};
export default ProductManagement;
