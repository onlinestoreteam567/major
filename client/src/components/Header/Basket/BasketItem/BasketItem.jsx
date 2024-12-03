import cl from './index.module.scss';
import Plus from '@assets/svg/basket/Plus.jsx';
import Minus from '@assets/svg/basket/Minus';
import { useDispatch } from 'react-redux';
import { addItem, removeItem, decrementItemQuantity, setItemQuantity } from '@features/cart/cartSlice.js/';
import Heading from '@UI/Texts/Heading/Heading';

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
    <li className={cl.basketItem}>
      <img src="images/basket/basketItem" className={cl.basketItemImg} alt="" />
      <section>
        <Heading type="h4">{item.name}</Heading>
        <Heading type="h4">
          {item.price} <img src="svg/hryvnia.svg" alt="" className={cl.hryvniaIcon} />
        </Heading>
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
