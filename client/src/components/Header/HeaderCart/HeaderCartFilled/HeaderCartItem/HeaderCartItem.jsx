import cl from './index.module.scss';
import Plus from '@components/UI/icons/ButtonPlus';
import Minus from '@components/UI/icons/ButtonMinus';
import { useDispatch } from 'react-redux';
import { removeItem, decrementItemQuantity, setItemQuantity } from '@redux/cart/cartSlice.js/';
import Heading from '@UI/Texts/Heading/Heading';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import ButtonAriaLabel from '@components/UI/Button/ButtonAriaLabel';
import { useEffect, useState } from 'react';
import { incrementItemQuantity } from '@redux/cart/cartSlice';
import { Link } from 'react-router-dom';
import { useImageError } from '@hooks/useImageError';
const hryvnia = '\u20B4';
const digitRegex = /^\d*$/;

const HeaderCartItem = ({ item, onClick }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity);
  const [imageSrc, handleError] = useImageError(item.images[0].image);

  const handleAddToCart = () => dispatch(incrementItemQuantity(item.id));
  const handleRemoveItem = () => dispatch(removeItem(item.id));
  const handleDecrementItem = () => dispatch(decrementItemQuantity(item.id));
  const handleQuantityChange = (e) => {
    const value = e.target.value;

    if (digitRegex.test(value)) {
      if (value === '0') return;

      setQuantity(value);

      if (value === '') {
        dispatch(setItemQuantity({ id: item.id, quantity: 1 }));
      } else {
        const parsedQuantity = parseInt(value, 10);
        if (!isNaN(parsedQuantity) && parsedQuantity >= 1) {
          dispatch(setItemQuantity({ id: item.id, quantity: parsedQuantity }));
        }
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      handleAddToCart();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      handleDecrementItem();
    }
  };

  useEffect(() => {
    item.quantity !== 0 && setQuantity(item.quantity);
  }, [item.quantity]);

  const { getTranslation } = useTranslationNamespace('common');
  return (
    <li className={cl.headerCartItem}>
      <Link onClick={onClick} to={`/catalog/${item.id}`}>
        <img src={imageSrc} onError={handleError} className={cl.basketItemImg} alt={item.name} />
      </Link>
      <section>
        <Heading type="h4">{item.name}</Heading>
        <div className={cl.priceWrap}>
          <Heading type="h4">
            {item.price_with_discount || item.price} {hryvnia}
          </Heading>
          {item.is_discount && (
            <div className={cl.oldPrice}>
              <span className={cl.costOld}>{item.price}</span>
              <span className={cl.hrnGrey}>{hryvnia}</span>
            </div>
          )}
        </div>
        <section className={cl.basketItemCounterAndDeleteSection}>
          <section>
            <ButtonAriaLabel al="decreaseQuantity" onClick={handleDecrementItem}>
              <Minus />
            </ButtonAriaLabel>
            <input type="text" value={quantity} onChange={handleQuantityChange} onKeyDown={handleKeyDown} />
            <ButtonAriaLabel al="increaseQuantity" onClick={handleAddToCart}>
              <Plus />
            </ButtonAriaLabel>
          </section>
          <ButtonAriaLabel al="removeItem" onClick={handleRemoveItem} className={cl.deleteButton}>
            {getTranslation('delete')}
          </ButtonAriaLabel>
        </section>
      </section>
    </li>
  );
};
export default HeaderCartItem;
