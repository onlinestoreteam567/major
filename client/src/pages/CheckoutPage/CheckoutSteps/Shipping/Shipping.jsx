import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import Button from '@components/UI/Button/Button';
import NovaPost from './NovaPost/NovaPost';
import { ShippingTextArea } from './ShippingTextArea/ShippingTextArea';
import { useState } from 'react';

const Shipping = ({ control, activeStep, setActiveStep, register, errors, trigger, getValues }) => {
  const [shippingMethod, setShippingMethod] = useState('novaPost');

  return (
    <div className={cl.shipping}>
      <div className={cl.shippingHeader}>
        <Heading type="h3">2. Доставка</Heading>
        {activeStep !== 2 && <button onClick={() => setActiveStep(2)}>Редагувати</button>}
      </div>
      {activeStep === 2 ? (
        <>
          <div>
            <Paragraph type="body2">Оберіть спосіб доставки :</Paragraph>
            <p>(Достака можлива лише на території України)</p>
          </div>
          <div>
            <button
              className={shippingMethod === 'novaPost' ? cl.active : ''}
              onClick={() => setShippingMethod('novaPost')}
              type="button"
            >
              <Heading type="h4">Нова Пошта</Heading>
            </button>
            <button
              type="button"
              className={shippingMethod === 'selfPickup' ? cl.active : ''}
              onClick={() => setShippingMethod('selfPickup')}
            >
              <Heading type="h4">Самовивіз</Heading>
            </button>
          </div>
          <div>
            {shippingMethod === 'novaPost' ? (
              <>
                <NovaPost control={control} register={register} errors={errors} />
              </>
            ) : (
              <Paragraph type="body1">
                Забрати можна за адресою: <br /> м.Нововолинськ віділення Нової пошти №4
              </Paragraph>
            )}
            <ShippingTextArea
              name={'comment'}
              register={register}
              errors={errors}
              labelText={'Коментар до замовлення:'}
              placeholder={'Коментар до замовлення'}
            />
            <Button
              onClick={async () => {
                if (shippingMethod === 'novaPost') {
                  const isStepValid = await trigger(['settlement', 'warehouse', 'comment']);
                  if (isStepValid) setActiveStep(3);
                } else {
                  setActiveStep(3);
                }
              }}
            >
              Продовжити
            </Button>
          </div>
        </>
      ) : (
        <Paragraph type="body2">
          {getValues().settlement} <br /> {getValues().warehouse} <br /> <br />
          Коментар до замовлення: {getValues().comment}
        </Paragraph>
      )}
    </div>
  );
};
export default Shipping;
