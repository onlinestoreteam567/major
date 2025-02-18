import Spinner from '@components/helpers/Spinner';
import { loadProducts } from '../../../redux/selectors';
import Bottom from './Bottom/Bottom';
import CardsContainer from './CardsContainer/CardsContainer';
import cl from './index.module.scss';
import { useSelector } from 'react-redux';

const Products = () => {
  const isLoading = useSelector(loadProducts);
  return (
    <section className={cl.productsWrapper}>
      <>{isLoading ? <Spinner /> : <CardsContainer />}</>

      <Bottom />
    </section>
  );
};
export default Products;
