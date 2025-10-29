import Heading from '@components/UI/Texts/Heading/Heading';
import CheckoutBreadCrumbs from './CheckoutBreadCrumbs/CheckoutBreadCrumbs';
import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import CheckoutSteps from './CheckoutSteps/CheckoutSteps';
import { useSelector } from 'react-redux';
import { selectCart } from '@redux/selectors';
import CheckoutCart from './CheckoutCart/CheckoutCart';
import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { promocodeReducer } from '@redux/promocode/promocodeSlice';
import { injectReducers } from '@config/store';
import Spinner from '@components/UI/Spinner/Spinner';
import { settlementsReducer } from '@redux/novaPost/settlementsSlice';
import { warehousesReducer } from '@redux/novaPost/warehousesSlice';

const CheckoutPage = () => {
  const { getTranslation } = useTranslationNamespace('checkoutPage');
  const cartItems = useSelector(selectCart);
  const [isReducerLoaded, setIsReducerLoaded] = useState(false);
  const [totalToPaid, setTotalToPaid] = useState(0);

  const checkoutPageReducers = {
    promocode: promocodeReducer,
    settlements: settlementsReducer,
    warehouses: warehousesReducer,
  };

  useEffect(() => {
    injectReducers(checkoutPageReducers);
    setIsReducerLoaded(true);
  }, []);

  return !isReducerLoaded ? (
    <Spinner />
  ) : (
    <div className={cl.checkoutPage}>
      <Helmet>
        <title>{getTranslation('metaTitle')}</title>
        <meta name="description" content={getTranslation('metaDescription')} />
      </Helmet>

      <CheckoutBreadCrumbs />
      <Heading type="h2">{getTranslation('checkout')}</Heading>
      <CheckoutCart setTotalToPaid={setTotalToPaid} />
      {cartItems.length !== 0 && <CheckoutSteps totalToPaid={totalToPaid} />}
    </div>
  );
};
export default CheckoutPage;
