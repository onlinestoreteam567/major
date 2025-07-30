import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import Button from '@components/UI/Button/Button';
import PaymentCheckbox from './PaymentCheckbox/PaymentCheckbox';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const Payment = ({ activeStep, setActiveStep, register, errors, trigger }) => {
  const { getTranslation } = useTranslationNamespace('checkoutPage');

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
            <div>
              <img src="/images/checkout/firstOption.webp" alt={getTranslation('firstOptionAlt')} />
              <div>
                <Heading type="h4">{getTranslation('partialPaymentTitle')}</Heading>
                <Paragraph type="body2">{getTranslation('partialPaymentDescription')}</Paragraph>
              </div>
            </div>
            <div>
              <img src="/images/checkout/secondOption.webp" alt={getTranslation('secondOptionAlt')} />
              <div>
                <Heading type="h4">{getTranslation('fullPaymentTitle')}</Heading>
                <Paragraph type="body2">{getTranslation('fullPaymentDescription')}</Paragraph>
              </div>
            </div>
          </div>
          <PaymentCheckbox name="checkbox" register={register} errors={errors} />
          <Button
            onClick={async () => {
              const isStepValid = await trigger(['checkbox']);
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
