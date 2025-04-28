import Card from '@pages/CatalogPage/Products/CardsContainer/Card/Card';
import cl from './index.module.scss';

const ProductList = ({ products }) => {
  return (
    <ul className={cl.productList}>
      {products.map((product) => (
        <Card key={product.id} card={product} />
      ))}
    </ul>
  );
};
export default ProductList;
