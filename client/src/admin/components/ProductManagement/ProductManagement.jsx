// import { useEffect } from 'react';
import cl from './index.module.scss';
import List from './ProductList/ProductList';
// import { useDispatch } from 'react-redux';
// import { fetchProductsAll } from '@redux/products/service';
import { Link } from 'react-router-dom';
// import ProductForm from './ProductForm/ProductForm';
import Button from '@components/UI/Button/Button';
import Search from './Search/Search';
const ProductManagement = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchProductsAll());
  // }, [dispatch]);

  return (
    <div className={cl.productManagement}>
      <div>
        <p>Товари(30)</p>
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
