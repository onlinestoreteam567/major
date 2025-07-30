import Heading from '@components/UI/Texts/Heading/Heading';
import Cart from './Cart/Cart';
import CheckoutBreadCrumbs from './CheckoutBreadCrumbs/CheckoutBreadCrumbs';
import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import CheckoutSteps from './CheckoutSteps/CheckoutSteps';
import { useSelector } from 'react-redux';
import { selectCart } from '@redux/selectors';
const CheckoutPage = () => {
  const { getTranslation } = useTranslationNamespace('checkoutPage');
  const cartItems = useSelector(selectCart);
  return (
    <div className={cl.checkoutPage}>
      <CheckoutBreadCrumbs />
      <Heading type="h2">{getTranslation('checkout')}</Heading>
      <Cart />
      {cartItems.length !== 0 && <CheckoutSteps />}
    </div>
  );
};
export default CheckoutPage;
