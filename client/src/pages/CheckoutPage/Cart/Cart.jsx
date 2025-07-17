import { useSelector } from 'react-redux';
import cl from './index.module.scss';
import { selectPromocode } from '@redux/selectors';
import { useEffect, useState } from 'react';
import calculateDiscountedItems from './helpers/calculateDiscountedItems';
import Heading from '@components/UI/Texts/Heading/Heading';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Arrow from '@assets/svg/Admin/Arrow/Arrow';
import CheckoutCartItem from './CartItem/CartItem';
import Promocode from './Promocode/Promocode';

const Cart = () => {
  const { getTranslation } = useTranslationNamespace('checkoutPage');
  const cartItems = useSelector((state) => state.cart.items);
  const promocodeDiscount = useSelector(selectPromocode);
  const [discountedItems, setDiscountedItems] = useState([...cartItems]);
  const [isExpanded, setIsExpanded] = useState(true);
  const hryvnia = '\u20B4';
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price_with_discount * item.quantity, 0);

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  useEffect(() => {
    setDiscountedItems(calculateDiscountedItems(promocodeDiscount, cartItems));
  }, [promocodeDiscount, cartItems]);

  return (
    <div className={cl.checkoutCart}>
      <div className={isExpanded ? cl.expanded : ''}>
        <Heading type="h4">
          {getTranslation('NumberOfItemsInTheCart')} {discountedItems.length}
        </Heading>
        <button onClick={toggleExpanded}>
          <Arrow />
        </button>
      </div>
      {isExpanded && (
        <ul>
          {discountedItems.map((product) => (
            <CheckoutCartItem key={product.id} product={product} />
          ))}
        </ul>
      )}
      <div>
        <div>
          <Heading type="h4">
            Загальна сума:
            <span>
              {totalPrice} <span>{hryvnia}</span>
            </span>
          </Heading>
        </div>
        <div>
          <Heading type="h3">
            До сплати:
            <span>
              2044 <span>{hryvnia}</span>
            </span>
          </Heading>
        </div>
      </div>

      <Promocode />
    </div>
  );
};
export default Cart;
