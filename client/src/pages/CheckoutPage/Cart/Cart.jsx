import { useDispatch, useSelector } from 'react-redux';
import cl from './index.module.scss';
import { selectCart, selectCartSavedIds, selectPromocode } from '@redux/selectors';
import { useEffect, useState } from 'react';
import calculateDiscountedItems from './helpers/calculateDiscountedItems';
import Heading from '@components/UI/Texts/Heading/Heading';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Arrow from '@assets/svg/Admin/Arrow/Arrow';
import CheckoutCartItem from './CartItem/CartItem';
import Promocode from './Promocode/Promocode';
import { getProductsByCartIds } from '@redux/products/service';
import { useTranslation } from 'react-i18next';

const Cart = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const { getTranslation } = useTranslationNamespace('checkoutPage');
  const savedIds = useSelector(selectCartSavedIds);
  const cartItems = useSelector(selectCart);
  const promocodeDiscount = useSelector(selectPromocode);
  const [discountedItems, setDiscountedItems] = useState([...cartItems]);
  const [isExpanded, setIsExpanded] = useState(true);
  const hryvnia = '\u20B4';
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price_with_discount * item.quantity, 0);

  useEffect(() => {
    if (savedIds && savedIds.length > 0) {
      dispatch(getProductsByCartIds(savedIds.map((item) => item.id)));
    }
  }, [i18n.language]);

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
            {getTranslation('totalSum')}
            <span>
              {totalPrice} <span>{hryvnia}</span>
            </span>
          </Heading>
        </div>
        <div>
          <Heading type="h3">
            {getTranslation('toBePaid')}
            <span>
              {/* TODO до сплати додати */}
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
