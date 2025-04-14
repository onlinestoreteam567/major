import Overlay from '@UI/Overlay/Overlay';
import cl from './index.module.scss';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import EmptyBasket from './EmptyBasket/EmptyBasket';
import FilledBusket from './FilledBasket/FilledBasket';
import Header from './Header/Header';
import { handleCloseWithDelay } from '@utils/handleCloseWithDelay';

const Basket = ({ setIsShowBasket }) => {
  const [hiddenBasket, setHiddenBasket] = useState(false);
  const [isEmptyBasket, setIsEmptyBasket] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleCloseBasket = () => handleCloseWithDelay(setHiddenBasket, setIsShowBasket);

  // Check if basket is empty
  useEffect(() => {
    cartItems.length === 0 ? setIsEmptyBasket(true) : setIsEmptyBasket(false);
  }, [cartItems]);

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

export default Basket;
