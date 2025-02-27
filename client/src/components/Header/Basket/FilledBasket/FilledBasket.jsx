import Heading from '@components/UI/Texts/Heading/Heading';
import BasketItem from '../BasketItem/BasketItem';
import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Button from '@components/UI/Button/Button';

const FilledBusket = ({ cartItems, totalQuantity, onClick }) => {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price_with_discount * item.quantity, 0);
  const { getTranslation } = useTranslationNamespace('basket');
  const hryvnia = '\u20B4';

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
            {totalPrice} {hryvnia}
          </span>
        </Heading>
      </section>
      <section className={cl.buttonsSection}>
        <Button variant="secondary" onClick={onClick}>
          {getTranslation('continueShopping')}
        </Button>
        <Button>{getTranslation('placeOrder')}</Button>
      </section>
    </>
  );
};
export default FilledBusket;
