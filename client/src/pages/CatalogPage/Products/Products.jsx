import Spinner from '@UI/Spinner/Spinner';
import CardsContainer from './CardsContainer/CardsContainer';
import cl from './index.module.scss';
import { useSelector } from 'react-redux';
import { loadProducts } from '@redux/selectors';

const Products = () => {
  const isLoading = useSelector(loadProducts);
  return (
    <section className={cl.productsWrapper}>
      <>{isLoading ? <Spinner /> : <CardsContainer />}</>
    </section>
  );
};
export default Products;
