import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import Button from '@components/UI/Button/Button';
import NovaPost from './NovaPost/NovaPost';
import { ShippingTextArea } from './ShippingTextArea/ShippingTextArea';
import { useState } from 'react';

const Shipping = ({ register, errors }) => {
  const [shippingMethod, setShippingMethod] = useState('novaPost');

  return (
    <div className={cl.shipping}>
      <div>
        <Heading type="h3">2. Доставка</Heading>
        <p>Редагувати</p>
      </div>
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
            <NovaPost />
          </>
        ) : (
          <Paragraph type="body1">
            Забрати можна за адресою: <br /> м.Нововолинськ віділення Нової пошти №4
          </Paragraph>
        )}
        <ShippingTextArea
          name={'goodName'}
          register={register}
          errors={errors}
          labelText={'Коментар до замовлення:'}
          placeholder={'Коментар до замовлення'}
        />
        <Button>Продовжити</Button>
      </div>
    </div>
  );
};
export default Shipping;
