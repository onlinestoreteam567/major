import cl from './index.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { loadFromStorage } from '@utils/localStorage';
import { checkInvoiceStatus } from '@redux/checkout/service';
import { errorCheckInvoiceStatus, responseCheckInvoiceStatus } from '@redux/selectors';
import { useEffect } from 'react';
import Heading from '@components/UI/Texts/Heading/Heading';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Overlay from '@components/UI/Overlay/Overlay';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@components/UI/Button/Button';

const PaymentStatus = () => {
  const dispatch = useDispatch();
  const { getTranslation } = useTranslationNamespace('checkoutPage');
  const invoceId = loadFromStorage('invoice_id');
  const invoiceSuccess = useSelector(responseCheckInvoiceStatus);
  const invoiceError = useSelector(errorCheckInvoiceStatus);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(checkInvoiceStatus(invoceId));
    // dispatch(checkInvoiceStatus('invoceId'));
  }, [dispatch, invoceId]);

  console.log(invoiceSuccess);
  console.log(invoiceError);

  return (
    <>
      <Overlay handleClose={() => navigate('/catalog')} />
      <div className={cl.paymentStatusWrapper}>
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
            <Link to={'/catalog'}>{getTranslation('toCatalog')}</Link>
          </div>
        )}
        {invoiceError && (
          <div>
            <Heading type="h2">
              {getTranslation('order1')} №{invoiceSuccess.invoice_id} {getTranslation('order2')}
            </Heading>
            <div>
              <Paragraph type="body1">Схоже, щось пішло не так під час платежу.</Paragraph>
              <Paragraph type="body1">
                Схоже, щось пішло не так під час платежу. Не хвилюйтеся — ваше замовлення нікуди не зникло. Спробуйте
                оплатити ще раз або перевірте дані картки.
              </Paragraph>
            </div>
            <Button>Спробувати ще раз</Button>
          </div>
        )}
      </div>
    </>
  );
};
export default PaymentStatus;
