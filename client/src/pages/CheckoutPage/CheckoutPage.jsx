import Cart from './Cart/Cart';
import cl from './index.module.scss';
import NovaPost from './NovaPost/NovaPost';
import Promocode from './Promocode/Promocode';

const CheckoutPage = () => {
  return (
    <div className={cl.checkoutPage}>
      <NovaPost />
      <Cart />
      <Promocode />
    </div>
  );
};
export default CheckoutPage;
