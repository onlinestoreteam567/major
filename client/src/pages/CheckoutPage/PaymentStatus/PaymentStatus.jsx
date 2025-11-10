import cl from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { loadFromStorage, removeFromStorage, saveToStorage } from '@utils/localStorage';
import { checkInvoiceStatus } from '@redux/checkout/service';
import { errorCheckInvoiceStatus, responseCheckInvoiceStatus } from '@redux/selectors';
import { useEffect } from 'react';
import Heading from '@components/UI/Texts/Heading/Heading';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Overlay from '@components/UI/Overlay/Overlay';
import { Link, useNavigate } from 'react-router-dom';
import { clearCart } from '@redux/cart/cartSlice';
import ButtonClose from '@components/UI/Button/ButtonClose/ButtonClose';

const PaymentStatus = ({ setIsShowPaymentStatus }) => {
  const dispatch = useDispatch();
  const { getTranslation } = useTranslationNamespace('checkoutPage');
  const invoiceId = loadFromStorage('invoice_id');
  const invoiceIdForever = loadFromStorage('invoice_id_forever');
  const invoiceSuccess = useSelector(responseCheckInvoiceStatus);
  const invoiceError = useSelector(errorCheckInvoiceStatus);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(checkInvoiceStatus(invoiceId));
    // dispatch(checkInvoiceStatus('invoceId'));
  }, [dispatch, invoiceId]);

  const closeOnSuccess = () => {
    setIsShowPaymentStatus(false);
    navigate('/catalog');
    dispatch(clearCart());
    saveToStorage('invoice_id_forever', { ...invoiceIdForever, invoiceId });
    removeFromStorage('invoice_id');
  };

  const closeOnError = () => {
    setIsShowPaymentStatus(false);
    navigate('/checkout');
  };

  return (
    <>
      {invoiceSuccess && <Overlay handleClose={() => closeOnSuccess()} />}
      {invoiceError && <Overlay handleClose={() => closeOnError()} />}
      <div className={cl.paymentStatusWrapper}>
        {invoiceSuccess && <ButtonClose onClick={() => closeOnSuccess()} />}
        {invoiceError && <ButtonClose onClick={() => closeOnError()} />}

        {invoiceSuccess && (
          <div>
            <Heading type="h2">
              {getTranslation('order1')} №{invoiceSuccess.invoice_id} {getTranslation('order2')}
            </Heading>
            <div>
              <Paragraph type="body1">{getTranslation('paragraph1')}</Paragraph>
              <Paragraph type="body1">{getTranslation('paragraph2')}</Paragraph>
              <Paragraph type="body2">{getTranslation('paragraph3')}</Paragraph>
            </div>
            <Link to={'/catalog'} onClick={() => closeOnSuccess()}>
              {getTranslation('toCatalog')}
            </Link>
          </div>
        )}
        {invoiceError && (
          <div>
            <Heading type="h2">Оплата не пройшла</Heading>
            <div>
              <Paragraph type="body1">Схоже, щось пішло не так під час платежу.</Paragraph>
              <Paragraph type="body1">
                Схоже, щось пішло не так під час платежу. Не хвилюйтеся — ваше замовлення нікуди не зникло. Спробуйте
                оплатити ще раз або перевірте дані картки.
              </Paragraph>
            </div>
            <Link to={'/checkout'} onClick={() => closeOnError()}>
              Спробувати ще раз
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
export default PaymentStatus;
