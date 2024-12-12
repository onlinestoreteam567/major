import Bottom from './Bottom/Bottom';
import cl from './index.module.scss';

const Products = ({ children }) => {
  return (
    <section className={cl.productsWrapper}>
      {children}
      <Bottom />
    </section>
  );
};
export default Products;
