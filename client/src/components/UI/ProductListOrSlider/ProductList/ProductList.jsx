import Card from '@components/UI/ProductCard/ProductCard';
import cl from './index.module.scss';

const ProductList = ({ products }) => {
  return (
    <div className={cl.productList}>
      {products.map((product) => (
        <Card key={product.id} card={product} />
      ))}
    </div>
  );
};
export default ProductList;
