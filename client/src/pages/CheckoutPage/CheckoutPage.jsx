import Heading from '@components/UI/Texts/Heading/Heading';
import Cart from './Cart/Cart';
import CheckoutBreadCrumbs from './CheckoutBreadCrumbs/CheckoutBreadCrumbs';
import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import CheckoutSteps from './CheckoutSteps/CheckoutSteps';
const CheckoutPage = () => {
  const { getTranslation } = useTranslationNamespace('checkoutPage');

  return (
    <div className={cl.checkoutPage}>
      <CheckoutBreadCrumbs />
      <Heading type="h2">{getTranslation('checkout')}</Heading>
      {/* <NovaPost /> */}
      <Cart />
      <CheckoutSteps />
    </div>
  );
};
export default CheckoutPage;
