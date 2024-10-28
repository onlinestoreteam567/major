import BasketItemImg from '../../../assets/png/basket/basketItem.jpg';
import cl from './index.module.scss';
import Minus from '@assets/svg/basket/Minus';
import Plus from '@assets/svg/basket/Plus.jsx';
import hryvniaIcon from '@assets/svg/hryvnia.svg';
import { useDispatch } from 'react-redux';
import { addItem, removeItem, decrementItemQuantity, setItemQuantity } from '../../../features/cart/cartSlice.js';

const BasketItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(item));
  };
  const handleRemoveItem = () => {
    dispatch(removeItem(item.id));
  };
  const handleDecrementItem = () => {
    dispatch(decrementItemQuantity(item.id));
  };
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      dispatch(setItemQuantity({ id: item.id, quantity: newQuantity }));
    }
  };

  return (
    <li>
      <img src={BasketItemImg} className={cl.basketItemImg} alt="" />
      <section>
        <h3>{item.name}</h3>
        <h3>
          {item.price} <img src={hryvniaIcon} alt="" className={cl.hryvniaIcon} />
        </h3>
        <section className={cl.basketItemCounterAndDeleteSection}>
          <section>
            <button className={cl.countButton} onClick={handleDecrementItem}>
              <Minus />
            </button>
            <input type="number" name="" id="" value={item.quantity} onChange={handleQuantityChange} />
            <button className={cl.countButton} onClick={handleAddToCart}>
              <Plus />
            </button>
          </section>
          <button className={cl.deleteButton} onClick={handleRemoveItem}>
            Видалити
          </button>
        </section>
      </section>
    </li>
  );
};
export default BasketItem;
