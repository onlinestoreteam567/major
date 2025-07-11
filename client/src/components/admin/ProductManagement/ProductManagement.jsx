// import { useEffect } from 'react';
import cl from './index.module.scss';
import List from './ProductList/ProductList';
// import { useDispatch } from 'react-redux';
// import { fetchProductsAll } from '@redux/products/service';
import { Link } from 'react-router-dom';
// import ProductForm from './ProductForm/ProductForm';
import Button from '@components/UI/Button/Button';
import { selectFilteredProducts } from '@redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import Search from './Search/Search';
import { useEffect } from 'react';
import { filterProductsByName } from '@redux/products/listSlice';
const ProductManagement = () => {
  const items = useSelector(selectFilteredProducts);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchProductsAll());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(filterProductsByName());
  }, [dispatch]);

  return (
    <div className={cl.productManagement}>
      <div>
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
