import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import ButtonClose from '@components/UI/Button/ButtonClose/ButtonClose';
import { removeItem } from '@features/cart/cartSlice';
import { useDispatch } from 'react-redux';

const CheckoutCartItem = ({ product }) => {
  const dispatch = useDispatch();
  const hryvnia = '\u20B4';

  const handleRemoveItem = () => dispatch(removeItem(product.id));

  return (
    <li className={cl.cartItem}>
      <img src={product.images[0].image} alt={product.name} />

      <section>
        <div>
          <Paragraph type="body2">{product.name}</Paragraph>
          <ButtonClose onClick={handleRemoveItem} />
        </div>

        <div>
          <Heading type="h4">
            <span>Ціна</span>
            {product.price_with_discount || product.price} {hryvnia}
          </Heading>
          <Heading type="h4">
            <span>Кількість</span>х {product.quantity}
          </Heading>
          <Heading type="h4">
            <span>Сума</span>
            {product.price_with_discount || product.price * product.quantity} {hryvnia}
          </Heading>
        </div>
      </section>
    </li>
  );
};
export default CheckoutCartItem;
