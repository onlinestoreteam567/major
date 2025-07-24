import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import Button from '@components/UI/Button/Button';
import PaymentCheckbox from './PaymentCheckbox/PaymentCheckbox';

const Payment = ({ activeStep, register, errors, trigger }) => {
  return (
    <div className={cl.payment}>
      <div>
        <Heading type="h3">3. Оплата</Heading>
      </div>
      {activeStep === 3 && (
        <>
          <div>
            <Paragraph type="body1">Як оплатити замовлення?</Paragraph>
            <Paragraph type="body2">
              Ми працюємо через оплату на ФОП, але зробили все, щоб це було просто та зручно для вас. Обирайте:
            </Paragraph>
          </div>
          <div>
            <div>
              <img src="/images/checkout/firstOption.webp" alt="" />
              <div>
                <Heading type="h4">Часткова передплата — 100 грн</Heading>
                <Paragraph type="body2">Щоб ми почали збирати замовлення саме для вас. </Paragraph>
              </div>
            </div>
            <div>
              <img src="/images/checkout/firstOption.webp" alt="" />
              <div>
                <Heading type="h4">Повна оплата</Heading>
                <Paragraph type="body2">Так ваше замовлення ще швидше вирушить до вас.</Paragraph>
              </div>
            </div>
          </div>
          <PaymentCheckbox name="checkbox" register={register} errors={errors} />
          <Button
            onClick={async () => {
              const isStepValid = await trigger(['checkbox']);
              if (isStepValid) console.log('Плати.');
            }}
          >
            Оплатити
          </Button>
        </>
      )}
    </div>
  );
};
export default Payment;
