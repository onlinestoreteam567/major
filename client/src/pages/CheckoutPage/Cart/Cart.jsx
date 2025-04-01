import { useSelector } from 'react-redux';
import cl from './index.module.scss';
import CartItem from './CartItem/CartItem';
import { selectPromocode } from '@redux/selectors';
import { useEffect, useState } from 'react';
import calculateDiscountedItems from './helpers/calculateDiscountedItems';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const promocodeDiscount = useSelector(selectPromocode);
  const [discountedItems, setDiscountedItems] = useState([...cartItems]);

  useEffect(() => {
    setDiscountedItems(calculateDiscountedItems(promocodeDiscount, cartItems));
  }, [promocodeDiscount, cartItems]);

  return (
    <div className={cl.cart}>
      <ul>
        {discountedItems.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};
export default Cart;
