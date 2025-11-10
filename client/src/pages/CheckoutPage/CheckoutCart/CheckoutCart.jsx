import { useDispatch, useSelector } from 'react-redux';
import cl from './index.module.scss';
import { selectCart, selectCartSavedIds, selectPromocode } from '@redux/selectors';
import { useEffect, useState, useMemo } from 'react';
import Heading from '@components/UI/Texts/Heading/Heading';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Arrow from '@components/UI/icons/Admin/Arrow/Arrow';
import Promocode from './Promocode/Promocode';
import { getProductsByCartIds } from '@redux/products/service';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import CheckoutCartItem from './CheckoutCartItem/CheckoutCartItem';

const CheckoutCart = ({ setTotalToPaid }) => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const { getTranslation } = useTranslationNamespace('checkoutPage');
  const savedIds = useSelector(selectCartSavedIds);
  const cartItems = useSelector(selectCart);
  const promocodeDiscount = useSelector(selectPromocode);
  const [isExpanded, setIsExpanded] = useState(true);
  const hryvnia = '\u20B4';

  const { totalToBePaid, totalInitialPrice, totalDiscountAmount } = useMemo(() => {
    let initialSum = 0;
    let finalSum = 0;

    const promoPercent = promocodeDiscount?.discount_percent || 0;

    cartItems.forEach((item) => {
      const basePrice = item.price;
      const productDiscountPercent = item.discount || 0;
      const effectiveDiscountPercent = Math.max(productDiscountPercent, promoPercent);
      const effectivePrice = basePrice * (1 - effectiveDiscountPercent / 100);
      finalSum += effectivePrice * item.quantity;
      initialSum += item.price * item.quantity;
    });

    const originalTotalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return {
      totalToBePaid: finalSum,
      totalInitialPrice: initialSum,
      totalDiscountAmount: originalTotalPrice - finalSum,
    };
  }, [cartItems, promocodeDiscount]);

  useEffect(() => {
    setTotalToPaid(totalToBePaid);
  }, [totalToBePaid, setTotalToPaid]);

  const isEmpty = cartItems.length === 0;

  useEffect(() => {
    if (savedIds && savedIds.length > 0) {
      dispatch(getProductsByCartIds(savedIds.map((item) => item.id)));
    }
  }, [i18n.language, savedIds, dispatch]);

  const toggleExpanded = () => setIsExpanded(!isExpanded);
  const formatPrice = (price) => price.toFixed(2);

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
            {formatPrice(totalInitialPrice)} <span>{hryvnia}</span>
          </span>
        </Heading>

        {totalDiscountAmount > 0 && (
          <Heading type="h4">
            {getTranslation('discount')}
            <span>
              - {formatPrice(totalDiscountAmount)}
              <span>{hryvnia}</span>
            </span>
          </Heading>
        )}

        <Heading type="h3">
          {getTranslation('toBePaid')}
          <span>
            {formatPrice(totalToBePaid)}
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
