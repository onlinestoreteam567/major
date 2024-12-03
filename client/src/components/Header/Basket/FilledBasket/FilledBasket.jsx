import Heading from '@components/UI/Texts/Heading/Heading';
import BasketItem from '../BasketItem/BasketItem';
import cl from './index.module.scss';

const FilledBusket = ({ cartItems, totalQuantity, onClick }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      <ul className={cl.basketItems}>
        {cartItems.map((item) => (
          <BasketItem key={item.id} item={item} />
        ))}
      </ul>
      <section className={cl.totalSection}>
        <p>
          <span>Кількість товарів</span>
          <strong>{totalQuantity}</strong>
        </p>
        <Heading type="h3">
          <span>Загалом</span>
          <span>
            {totalPrice} <img src="/svg/hryvnia.svg" alt="" className={cl.hryvniaIcon} />
          </span>
        </Heading>
      </section>
      <section className={cl.buttonsSection}>
        <button className={cl.continueShoppingButtonSecond} onClick={onClick}>
          Продовжити покупки
        </button>
        <button className={cl.orderButton}>Оформити замовлення</button>
      </section>
    </>
  );
};
export default FilledBusket;
