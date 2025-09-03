import ProductPrice from '@components/UI/ProductPrice/ProductPrice';
import cl from './index.module.scss';

export default function ProductPageCardPrice({ card }) {
  return (
    <div className={cl.productPageCardPrice}>
      <ProductPrice card={card} />
    </div>
  );
}
