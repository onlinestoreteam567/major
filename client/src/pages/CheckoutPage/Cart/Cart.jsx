import { useSelector } from 'react-redux';
import cl from './index.module.scss';
import CartItem from './CartItem/CartItem';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className={cl.cart}>
      <ul>
        {cartItems.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};
export default Cart;
