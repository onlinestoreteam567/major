import Heading from '@components/UI/Texts/Heading/Heading';
import Cart from './Cart/Cart';
import CheckoutBreadCrumbs from './CheckoutBreadCrumbs/CheckoutBreadCrumbs';
import cl from './index.module.scss';
import NovaPost from './NovaPost/NovaPost';
import Promocode from './Promocode/Promocode';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
const CheckoutPage = () => {
  const { getTranslation } = useTranslationNamespace('checkoutPage');

  return (
    <div className={cl.checkoutPage}>
      <CheckoutBreadCrumbs />
      <Heading type="h2">{getTranslation('checkout')}</Heading>
      <NovaPost />
      <Cart />
      <Promocode />
    </div>
  );
};
export default CheckoutPage;
