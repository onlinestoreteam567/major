import Button from '@components/UI/Button/Button';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import { addItem, addItemWithQuantity } from '@features/cart/cartSlice';
import { useDispatch } from 'react-redux';

const AddToCartButton = ({ card, variant = 'secondary', count }) => {
  const { getTranslation } = useTranslationNamespace('common');
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (count) {
      dispatch(addItemWithQuantity({ item: card, quantity: count }));
      console.log(123);
      return;
    }
    dispatch(addItem(card));
  };

  return (
    <Button ariaLabel={getTranslation('addToCart')} onClick={handleAddToCart} variant={variant}>
      {getTranslation('addToCart')}
    </Button>
  );
};
export default AddToCartButton;
