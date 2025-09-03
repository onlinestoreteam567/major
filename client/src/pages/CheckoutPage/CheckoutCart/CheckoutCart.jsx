import { useDispatch, useSelector } from 'react-redux';
import cl from './index.module.scss';
import { selectCart, selectCartSavedIds, selectPromocode } from '@redux/selectors';
import { useEffect, useState } from 'react';
import Heading from '@components/UI/Texts/Heading/Heading';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Arrow from '@components/UI/icons/Admin/Arrow/Arrow';
import CheckoutCartItem from './CheckoutCartItem/CartItem';
import Promocode from './Promocode/Promocode';
import { getProductsByCartIds } from '@redux/products/service';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const CheckoutCart = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const { getTranslation } = useTranslationNamespace('checkoutPage');
  const savedIds = useSelector(selectCartSavedIds);
  const cartItems = useSelector(selectCart);
  const promocodeDiscount = useSelector(selectPromocode);
  const [isExpanded, setIsExpanded] = useState(true);
  const hryvnia = '\u20B4';
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price_with_discount * item.quantity, 0);
  const isEmpty = cartItems.length === 0;
  console.log(promocodeDiscount);
  useEffect(() => {
    if (savedIds && savedIds.length > 0) {
      dispatch(getProductsByCartIds(savedIds.map((item) => item.id)));
    }
  }, [i18n.language]);

  const toggleExpanded = () => setIsExpanded(!isExpanded);

  return (
    <div className={`${cl.checkoutCart} ${isEmpty ? cl.empty : ''}`}>
      <div className={isExpanded ? cl.expanded : ''}>
        <Heading type="h4">
          {getTranslation('NumberOfItemsInTheCart')} {cartItems.length}
        </Heading>
        <button onClick={toggleExpanded}>
          <Arrow />
        </button>
      </div>
      {isExpanded && !isEmpty && (
        <ul>
          {cartItems.map((product) => (
            <CheckoutCartItem key={product.id} product={product} />
          ))}
        </ul>
      )}
      <div>
        <Heading type="h4">
          {getTranslation('totalSum')}
          <span>
            {totalPrice} <span>{hryvnia}</span>
          </span>
        </Heading>
        {promocodeDiscount && (
          <Heading type="h4">
            {getTranslation('discount')}
            <span>
              -{promocodeDiscount && ((totalPrice * promocodeDiscount.discount_percent) / 100).toFixed(2)}
              <span>{hryvnia}</span>
            </span>
          </Heading>
        )}

        <Heading type="h3">
          {getTranslation('toBePaid')}
          <span>
            {promocodeDiscount
              ? (totalPrice - (totalPrice * promocodeDiscount.discount_percent) / 100).toFixed(2)
              : totalPrice}
            <span>{hryvnia}</span>
          </span>
        </Heading>
      </div>

      {!isEmpty && <Promocode />}
      {isEmpty && (
        <Link to="/catalog" role="button" aria-label={getTranslation('placeOrder')}>
          <Heading type="h3">{getTranslation('goToCatalog')}</Heading>
        </Link>
      )}
    </div>
  );
};
export default CheckoutCart;
