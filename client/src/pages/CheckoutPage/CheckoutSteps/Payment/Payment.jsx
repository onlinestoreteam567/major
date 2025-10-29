import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import Button from '@components/UI/Button/Button';
import PaymentCheckbox from './PaymentCheckbox/PaymentCheckbox';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import { useEffect, useState } from 'react';

const Payment = ({ activeStep, setActiveStep, register, errors, trigger, watch }) => {
  const { getTranslation } = useTranslationNamespace('checkoutPage');
  const [isError, setIsError] = useState(false);
  const paymentOptionValue = watch('payment_option');

  useEffect(() => {
    if (!paymentOptionValue && errors?.payment_option) {
      console.log('true');
      setIsError(true);
    } else {
      console.log(false);
      setIsError(false);
    }
  }, [paymentOptionValue, errors]);

  return (
    <div className={cl.payment}>
      <div>
        <Heading type="h3">3. {getTranslation('payment')}</Heading>
      </div>
      {activeStep === 3 && (
        <>
          <div>
            <Paragraph type="body1">{getTranslation('paymentFirstTitle')}</Paragraph>
            <Paragraph type="body2">{getTranslation('paymentFirstParagraph')}</Paragraph>
          </div>
          <div>
            <label htmlFor="partialPayment" className={isError ? cl.error : ''}>
              <input
                type="radio"
                id="partialPayment"
                name="payment_option"
                value="partial"
                {...register('payment_option', { required: 'You must select a payment option' })}
              />
              <img src="/images/checkout/firstOption.webp" alt={getTranslation('firstOptionAlt')} />
              <div>
                <Heading type="h4">{getTranslation('partialPaymentTitle')}</Heading>
                <Paragraph type="body2">{getTranslation('partialPaymentDescription')}</Paragraph>
              </div>
            </label>
            <label htmlFor="fullPayment" className={isError ? cl.error : ''}>
              <input
                type="radio"
                id="fullPayment"
                name="payment_option"
                value="full"
                {...register('payment_option', { required: 'You must select a payment option' })}
              />
              <img src="/images/checkout/secondOption.webp" alt={getTranslation('secondOptionAlt')} />
              <div>
                <Heading type="h4">{getTranslation('fullPaymentTitle')}</Heading>
                <Paragraph type="body2">{getTranslation('fullPaymentDescription')}</Paragraph>
              </div>
            </label>

            {isError && <Paragraph type="caption">{getTranslation(errors?.payment_option?.message)}</Paragraph>}
          </div>
          <PaymentCheckbox name="checkbox" register={register} errors={errors} />
          <Button
            onClick={async () => {
              const isStepValid = await trigger(['checkbox', 'payment_option']);
              if (isStepValid) setActiveStep(4);
            }}
          >
            {getTranslation('pay')}
          </Button>
        </>
      )}
    </div>
  );
};
export default Payment;
