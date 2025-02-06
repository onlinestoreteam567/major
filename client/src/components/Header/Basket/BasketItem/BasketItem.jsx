import cl from './index.module.scss';
import Plus from '@assets/svg/ButtonPlus';
import Minus from '@assets/svg/ButtonMinus';
import { useDispatch } from 'react-redux';
import { addItem, removeItem, decrementItemQuantity, setItemQuantity } from '@features/cart/cartSlice.js/';
import Heading from '@UI/Texts/Heading/Heading';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const BasketItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => dispatch(addItem(item));
  const handleRemoveItem = () => dispatch(removeItem(item.id));
  const handleDecrementItem = () => dispatch(decrementItemQuantity(item.id));
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      dispatch(setItemQuantity({ id: item.id, quantity: newQuantity }));
    }
  };

  const { getTranslation } = useTranslationNamespace('common');

  return (
    <li className={cl.basketItem}>
      <img src={item.images[0].image} className={cl.basketItemImg} alt={item.name} />
      <section>
        <Heading type="h4">{item.name}</Heading>
        <Heading type="h4">
          {item.price} <img src="svg/hryvnia.svg" alt="" className={cl.hryvniaIcon} />
        </Heading>
        <section className={cl.basketItemCounterAndDeleteSection}>
          <section>
            <button onClick={handleDecrementItem}>
              <Minus />
            </button>
            <input type="number" value={item.quantity} onChange={handleQuantityChange} />
            <button onClick={handleAddToCart}>
              <Plus />
            </button>
          </section>
          <button className={cl.deleteButton} onClick={handleRemoveItem}>
            {getTranslation('delete')}
          </button>
        </section>
      </section>
    </li>
  );
};
export default BasketItem;
