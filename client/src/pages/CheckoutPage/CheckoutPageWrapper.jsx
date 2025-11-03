import { useEffect, useState } from 'react';
import { injectReducers } from '@config/store';
import { promocodeReducer } from '@redux/promocode/promocodeSlice';
import { settlementsReducer } from '@redux/novaPost/settlementsSlice';
import { warehousesReducer } from '@redux/novaPost/warehousesSlice';
import { createInvoiceReducer } from '@redux/checkout/createInvoiceSlice';
import CheckoutPage from './CheckoutPage';
import Spinner from '@components/UI/Spinner/Spinner';

const CheckoutPageWrapper = () => {
  const [isReducerLoaded, setIsReducerLoaded] = useState(false);

  const checkoutPageReducers = {
    promocode: promocodeReducer,
    settlements: settlementsReducer,
    warehouses: warehousesReducer,
    createInvoice: createInvoiceReducer,
  };

  useEffect(() => {
    injectReducers(checkoutPageReducers);
    setIsReducerLoaded(true);
  }, []);

  return !isReducerLoaded ? <Spinner /> : <CheckoutPage />;
};
export default CheckoutPageWrapper;
