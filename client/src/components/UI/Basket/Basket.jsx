import PropTypes from 'prop-types';
import Overlay from '../Overlay/Overlay';
import cl from './index.module.scss';
import crossIcon from '../../../assets/svg/crossIcon.svg';
import { useState } from 'react';
import basketItemExample from './basketItemExample';
import BasketItem from './BasketItem';
import hryvniaIcon from '../../../assets/svg/hryvnia.svg';

const Basket = ({ setIsShowBasket }) => {
  const [hiddenBasket, setHiddenBasket] = useState(false);
  const [isEmptyBasket, setIsEmptyBasket] = useState(false);

  const handleCloseBasket = () => {
    setHiddenBasket(true);
    clearTimeout();
    setTimeout(() => {
      setIsShowBasket(false);
    }, 450);
  };

  return (
    <>
      <Overlay handleClose={handleCloseBasket} />

      <div className={`${cl.basketWrapper} ${hiddenBasket && cl.closeBasket} ${!isEmptyBasket && cl.emptyBasket}`}>
        <section className={cl.basketHeaderSection}>
          <h2>Кошик</h2>
          <img onClick={handleCloseBasket} src={crossIcon} alt="Закрити" />
        </section>

        {isEmptyBasket ? (
          <>
            <p className={cl.emptyBasketText}>У вашому кошику зараз немає товарів</p>
            <button className={cl.continueShoppingButton}>Продовжити покупки</button>
          </>
        ) : (
          <>
            <ul>
              {basketItemExample.map((item) => (
                <BasketItem key={item.id} item={item} />
              ))}
            </ul>
            <section className={cl.totalSection}>
              <p>
                <span>Кількість товарів</span>
                <strong>1</strong>
              </p>
              <h3>
                <span>Загалом</span>
                <span>
                  999 <img src={hryvniaIcon} alt="" className={cl.hryvniaIcon} />
                </span>
              </h3>
            </section>
            <section className={cl.buttonsSection}>
              <button className={cl.continueShoppingButtonSecond}>Продовжити покупки</button>
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
