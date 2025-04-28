import Overlay from '@UI/Overlay/Overlay';
import cl from './index.module.scss';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EmptyBasket from './EmptyBasket/EmptyBasket';
import Header from './Header/Header';
import { handleCloseWithDelay } from '@utils/handleCloseWithDelay';
import { getProductsByCartIds } from '@redux/products/service';
import { loadCart, selectCart, selectCartSavedIds } from '@redux/selectors';
import Spinner from '@components/helpers/Spinner/Spinner';
import FilledBusket from './FilledBasket/FilledBasket';
import { useTranslation } from 'react-i18next';

const Basket = ({ setIsShowBasket }) => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  const [hiddenBasket, setHiddenBasket] = useState(false);
  const savedIds = useSelector(selectCartSavedIds);
  const isLoading = useSelector(loadCart);
  const cartItems = useSelector(selectCart);

  useEffect(() => {
    if (savedIds && savedIds.length > 0) {
      dispatch(getProductsByCartIds(savedIds.map((item) => item.id)));
    }
  }, [i18n.language]);

  const totalQuantity = savedIds.reduce((sum, item) => sum + item.quantity, 0);
  const isEmptyBasket = cartItems.length === 0;
  const handleCloseBasket = () => handleCloseWithDelay(setHiddenBasket, setIsShowBasket);

  return (
    <>
      <Overlay handleClose={handleCloseBasket} />

      <div className={`${cl.basketWrapper} ${hiddenBasket && cl.closeBasket} ${!isEmptyBasket && cl.emptyBasket}`}>
        <Header onClick={handleCloseBasket} />

        {isLoading ? (
          <Spinner />
        ) : (
          <>
            {isEmptyBasket ? (
              <EmptyBasket onClick={handleCloseBasket} />
            ) : (
              <FilledBusket cartItems={cartItems} totalQuantity={totalQuantity} onClick={handleCloseBasket} />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Basket;
