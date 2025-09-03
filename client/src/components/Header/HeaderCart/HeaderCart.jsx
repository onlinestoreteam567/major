import Overlay from '@UI/Overlay/Overlay';
import cl from './index.module.scss';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleCloseWithDelay } from '@utils/handleCloseWithDelay';
import { getProductsByCartIds } from '@redux/products/service';
import { loadCart, selectCart, selectCartSavedIds } from '@redux/selectors';
import Spinner from '@UI/Spinner/Spinner';
import { useTranslation } from 'react-i18next';
import HeaderCartTopSection from './HeaderCartTopSection/HeaderCartTopSection';
import HeaderCartEmpty from './HeaderCartEmpty/HeaderCartEmpty';
import HeaderCartFilled from './HeaderCartFilled/HeaderCartFilled';

const HeaderCart = ({ setIsShowBasket }) => {
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

      <div className={`${cl.headerCart} ${hiddenBasket && cl.closeBasket} ${!isEmptyBasket && cl.emptyBasket}`}>
        <HeaderCartTopSection onClick={handleCloseBasket} />

        {isLoading ? (
          <Spinner />
        ) : (
          <>
            {isEmptyBasket ? (
              <HeaderCartEmpty onClick={handleCloseBasket} />
            ) : (
              <HeaderCartFilled cartItems={cartItems} totalQuantity={totalQuantity} onClick={handleCloseBasket} />
            )}
          </>
        )}
      </div>
    </>
  );
};

export default HeaderCart;
