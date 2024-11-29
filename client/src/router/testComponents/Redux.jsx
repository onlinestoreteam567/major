import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, clearCart } from '@features/cart/cartSlice';

const product = {
  id: 1,
  name: 'Флюїд-шовк для тонкого волосся',
  urlImg: '/src/assets/png/searchInput/1.png',
  price: '299',
  quantity: 1,
};
const Redux = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addItem(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  useEffect(() => {
    console.log(cartItems);
    console.log(localStorage.getItem('state'));
  }, [cartItems]);
  return (
    <div>
      <button onClick={handleAddToCart}>Add to cart</button>
      <button onClick={handleClearCart}>Clear cart</button>
    </div>
  );
};

export default Redux;
