import { useSelector } from 'react-redux';
import cl from './index.module.scss';
import { selectPromocode } from '@redux/selectors';
import { useEffect, useState } from 'react';
import calculateDiscountedItems from './helpers/calculateDiscountedItems';
import Heading from '@components/UI/Texts/Heading/Heading';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Arrow from '@assets/svg/Admin/Arrow/Arrow';
import CheckoutCartItem from './CartItem/CartItem';

const Cart = () => {
  const { getTranslation } = useTranslationNamespace('checkoutPage');
  const cartItems = useSelector((state) => state.cart.items);
  const promocodeDiscount = useSelector(selectPromocode);
  const [discountedItems, setDiscountedItems] = useState([...cartItems]);
  const [isExpanded, setIsExpanded] = useState(true);

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
    </div>
  );
};
export default Cart;
