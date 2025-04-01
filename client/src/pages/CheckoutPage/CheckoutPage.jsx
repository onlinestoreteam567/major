import Cart from './Cart/Cart';
import cl from './index.module.scss';
import Promocode from './Promocode/Promocode';

const CheckoutPage = () => {
  return (
    <div className={cl.checkoutPage}>
      <Cart />
      <Promocode />
    </div>
  );
};
export default CheckoutPage;
