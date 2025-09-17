import { Link } from 'react-router-dom';
import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const CheckoutBreadCrumbs = () => {
  const { getTranslation } = useTranslationNamespace('checkoutPage');

  return (
    <Link to={'/catalog'} className={cl.checkoutBreadCrumbs}>
      <img src="/svg/banners/arrowLeft.svg" alt={getTranslation('backArrowAlt')} />
      {getTranslation('continueShopping')}
    </Link>
  );
};
export default CheckoutBreadCrumbs;
