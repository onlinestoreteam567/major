import PropTypes from "prop-types";
import cl from "./index.module.scss";
import crossIcon from "../../../assets/svg/basket/crossIcon.svg";
import { useState } from "react";

const Basket = ({ setIsShowBasket }) => {
  const [state, setState] = useState(false);

  const handleCloseBasket = () => {
    setState(true);
    clearTimeout();
    setTimeout(() => {
      setIsShowBasket(false);
    }, 450);
  };

  return (
    <div className={`${cl.basketWrapper} ${state && cl.closeBasket}`}>
      <section className={cl.basketHeaderSection}>
        <h2>Кошик</h2>
        <img onClick={handleCloseBasket} src={crossIcon} alt="Закрити" />
      </section>
      <div />
      <p className={cl.emptyBasketText}>У вашому кошику зараз немає товарів</p>
      <button>Продовжити покупки</button>
    </div>
  );
};

Basket.propTypes = {
  setIsShowBasket: PropTypes.func.isRequired,
};

export default Basket;
