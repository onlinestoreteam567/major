import Heading from '@components/UI/Texts/Heading/Heading';
import BasketItem from '../BasketItem/BasketItem';
import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const FilledBusket = ({ cartItems, totalQuantity, onClick }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const { getTranslation } = useTranslationNamespace('basket');

  return (
    <>
      <ul className={cl.basketItems}>
        {cartItems.map((item) => (
          <BasketItem key={item.id} item={item} />
        ))}
      </ul>
      <section className={cl.totalSection}>
        <p>
          <span>{getTranslation('numberOfItems')}</span>
          <strong>{totalQuantity}</strong>
        </p>
        <Heading type="h3">
          <span>{getTranslation('totalPrice')}</span>
          <span>
            {totalPrice} <img src="/svg/hryvnia.svg" alt="" className={cl.hryvniaIcon} />
          </span>
        </Heading>
      </section>
      <section className={cl.buttonsSection}>
        <button className={cl.continueShoppingButtonSecond} onClick={onClick}>
          {getTranslation('continueShopping')}
        </button>
        <button className={cl.orderButton}>{getTranslation('placeOrder')}</button>
      </section>
    </>
  );
};
export default FilledBusket;
