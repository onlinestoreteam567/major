// import { useEffect } from 'react';
import cl from './index.module.scss';
import List from './List/List';
// import { useDispatch } from 'react-redux';
// import { fetchProductsAll } from '@redux/products/service';
import { Link } from 'react-router-dom';
// import ProductForm from './ProductForm/ProductForm';

const ProductManagement = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchProductsAll());
  // }, [dispatch]);

  return (
    <div className={cl.productManagement}>
      <div>
        <Link to={`/admin/products/create`}>+</Link>
      </div>
      <List />
    </div>
  );
};
export default ProductManagement;
