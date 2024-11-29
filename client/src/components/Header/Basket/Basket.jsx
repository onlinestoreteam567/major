import PropTypes from 'prop-types';
import Overlay from '@UI/Overlay/Overlay';
import cl from './index.module.scss';
import { useState, useEffect } from 'react';
import BasketItem from './BasketItem';
import { useSelector } from 'react-redux';
import Heading from '@UI/Texts/Heading/Heading';
import Paragraph from '@UI/Texts/Paragraph/Paragraph';
import Button from '@UI/Button/Button';

const Basket = ({ setIsShowBasket }) => {
  const [hiddenBasket, setHiddenBasket] = useState(false);
  const [isEmptyBasket, setIsEmptyBasket] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCloseBasket = () => {
    setHiddenBasket(true);
    clearTimeout();
    setTimeout(() => {
      setIsShowBasket(false);
    }, 450);
  };

  // Check if basket is empty
  useEffect(() => {
    if (totalQuantity === 0) {
      setIsEmptyBasket(true);
    } else {
      setIsEmptyBasket(false);
    }
  }, [totalQuantity]);

  return (
    <>
      <Overlay handleClose={handleCloseBasket} />

      <div className={`${cl.basketWrapper} ${hiddenBasket && cl.closeBasket} ${!isEmptyBasket && cl.emptyBasket}`}>
        <section className={cl.basketHeaderSection}>
          <Heading type="h2">Кошик</Heading>

          <img onClick={handleCloseBasket} src="/svg/crossIcon.svg" alt="Закрити" />
        </section>

        {isEmptyBasket ? (
          <>
            <div className={cl.emptyBasketText}>
              <Paragraph type="body1">У вашому кошику зараз немає товарів</Paragraph>
            </div>
            <div className={cl.emptyBasketButtonWrapper}>
              <Button variant="secondary" onClick={handleCloseBasket}>
                Продовжити покупки
              </Button>
            </div>
          </>
        ) : (
          <>
            <ul>
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
              <button className={cl.continueShoppingButtonSecond} onClick={handleCloseBasket}>
                Продовжити покупки
              </button>
              <button className={cl.orderButton}>Оформити замовлення</button>
            </section>
          </>
        )}
      </div>
    </>
  );
};

Basket.propTypes = {
  setIsShowBasket: PropTypes.func.isRequired,
};

export default Basket;
