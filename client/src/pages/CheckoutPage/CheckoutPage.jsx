import Heading from '@components/UI/Texts/Heading/Heading';
import CheckoutBreadCrumbs from './CheckoutBreadCrumbs/CheckoutBreadCrumbs';
import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import CheckoutSteps from './CheckoutSteps/CheckoutSteps';
import { useSelector } from 'react-redux';
import { responseCreateInvoice, selectCart } from '@redux/selectors';
import CheckoutCart from './CheckoutCart/CheckoutCart';
import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { saveToStorage } from '@utils/localStorage';
import PaymentStatus from './PaymentStatus/PaymentStatus';

const CheckoutPage = () => {
  const { getTranslation } = useTranslationNamespace('checkoutPage');
  const cartItems = useSelector(selectCart);
  const responseInvoice = useSelector(responseCreateInvoice);
  const [totalToPaid, setTotalToPaid] = useState(0);
  const [isShowPaymentStatus, setIsShowPaymentStatus] = useState(false);

  useEffect(() => {
    if (responseInvoice && responseInvoice.page_url) {
      saveToStorage('invoice_id', responseInvoice.invoice_id);
      const bankRedirectUrl = responseInvoice.page_url;

      window.location.href = bankRedirectUrl;
    }
  }, [responseInvoice]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.get('fromBank') === 'true' || params.get('fromBank') === 'true/') {
      setIsShowPaymentStatus(true);
    }
  }, []);

  return (
    <div className={cl.checkoutPage}>
      <Helmet>
        <title>{getTranslation('metaTitle')}</title>
        <meta name="description" content={getTranslation('metaDescription')} />
      </Helmet>

      <CheckoutBreadCrumbs />
      <Heading type="h2">{getTranslation('checkout')}</Heading>
      <CheckoutCart setTotalToPaid={setTotalToPaid} />
      {cartItems.length !== 0 && <CheckoutSteps totalToPaid={totalToPaid} />}
      {isShowPaymentStatus && <PaymentStatus />}
    </div>
  );
};
export default CheckoutPage;
