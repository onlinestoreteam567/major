import ButtonClose from '@components/UI/Button/ButtonClose/ButtonClose';
import Heading from '@components/UI/Texts/Heading/Heading';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import { removeItem } from '@features/cart/cartSlice';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import { useDispatch } from 'react-redux';
import cl from './index.module.scss';

const CheckoutCartItem = ({ product }) => {
  const dispatch = useDispatch();
  const hryvnia = '\u20B4';
  const { getTranslation } = useTranslationNamespace('checkoutPage');

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
            <span>{getTranslation('price')}</span>
            {product.price_with_discount || product.price} {hryvnia}
          </Heading>
          <Heading type="h4">
            <span>{getTranslation('amount')}</span>х {product.quantity}
          </Heading>
          <Heading type="h4">
            <span>{getTranslation('total')}</span>
            {product.price_with_discount || product.price * product.quantity} {hryvnia}
          </Heading>
        </div>
      </section>
    </li>
  );
};
export default CheckoutCartItem;
