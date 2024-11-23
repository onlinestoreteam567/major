import CardCatalog from '@components/UI/CardCatalog/CardCatalog';
import Bottom from './Bottom';
import cl from './index.module.scss';
import card from './card.json';

const Products = () => {
  return (
    <section className={cl.productsWrapper}>
      <CardCatalog card={card} />
      <Bottom />
    </section>
  );
};
export default Products;
