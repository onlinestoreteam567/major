import Cart from './Cart/Cart';
import cl from './index.module.scss';

const CheckoutPage = () => {
  return (
    <div className={cl.checkoutPage}>
      <Cart />
    </div>
  );
};
export default CheckoutPage;
