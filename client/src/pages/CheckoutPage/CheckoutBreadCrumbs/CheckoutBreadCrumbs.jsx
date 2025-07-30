import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const CheckoutBreadCrumbs = () => {
  const { getTranslation } = useTranslationNamespace('checkoutPage');

  return (
    <button className={cl.checkoutBreadCrumbs}>
      <img src="/svg/banners/arrowLeft.svg" alt={getTranslation('backArrowAlt')} />
      {getTranslation('continueShopping')}
    </button>
  );
};
export default CheckoutBreadCrumbs;
