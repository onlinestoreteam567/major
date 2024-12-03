import PropTypes from 'prop-types';
import Overlay from '@UI/Overlay/Overlay';
import cl from './index.module.scss';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import EmptyBasket from './EmptyBasket/EmptyBasket';
import FilledBusket from './FilledBasket/FilledBasket';
import Header from './Header/Header';

const Basket = ({ setIsShowBasket }) => {
  const [hiddenBasket, setHiddenBasket] = useState(false);
  const [isEmptyBasket, setIsEmptyBasket] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

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
        <Header onClick={handleCloseBasket} />

        {isEmptyBasket ? (
          <EmptyBasket onClick={handleCloseBasket} />
        ) : (
          <FilledBusket cartItems={cartItems} totalQuantity={totalQuantity} onClick={handleCloseBasket} />
        )}
      </div>
    </>
  );
};

Basket.propTypes = {
  setIsShowBasket: PropTypes.func.isRequired,
};

export default Basket;
