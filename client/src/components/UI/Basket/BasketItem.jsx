import BasketItemImg from '../../../assets/png/basket/basketItem.jpg';
import cl from './index.module.scss';
import Minus from '../../../assets/svg/basket/Minus';
import Plus from '../../../assets/svg/basket/Plus.jsx';
import hryvniaIcon from '../../../assets/svg/hryvnia.svg';

const BasketItem = ({ item }) => {
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
            <button className={cl.countButton}>
              <Minus />
            </button>
            <input type="number" name="" id="" />
            <button className={cl.countButton}>
              <Plus />
            </button>
          </section>
          <button className={cl.deleteButton}>Видалити</button>
        </section>
      </section>
    </li>
  );
};
export default BasketItem;
