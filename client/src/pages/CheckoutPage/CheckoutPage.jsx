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

const CheckoutPage = () => {
  const { getTranslation } = useTranslationNamespace('checkoutPage');
  const cartItems = useSelector(selectCart);
  const responseInvoice = useSelector(responseCreateInvoice);
  const [totalToPaid, setTotalToPaid] = useState(0);

  useEffect(() => {
    if (responseInvoice && responseInvoice.page_url) {
      console.log(responseInvoice);
      const bankRedirectUrl = responseInvoice.page_url;

      window.location.href = bankRedirectUrl;
    }
  }, [responseInvoice]);

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
    </div>
  );
};
export default CheckoutPage;
