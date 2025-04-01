import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';

const CartItem = ({ product }) => {
  const hryvnia = '\u20B4';
  console.log(product);
  return (
    <li className={cl.cartItem}>
      <img src={product.images[0].image} className={cl.basketItemImg} alt={product.name} />
      <Heading type="h4">{product.name}</Heading>
      <div className={cl.priceWrap}>
        <Heading type="h4">
          {product.price_with_discount || product.price} {hryvnia}
        </Heading>
        {product.is_discount && (
          <div className={cl.oldPrice}>
            <span className={cl.costOld}>{product.price}</span>
            <span className={cl.hrnGrey}>{hryvnia}</span>
          </div>
        )}
      </div>
    </li>
  );
};
export default CartItem;
