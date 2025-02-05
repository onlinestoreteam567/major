import Button from '@components/UI/Button/Button';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import { addItem } from '@features/cart/cartSlice';
import { useDispatch } from 'react-redux';

const AddToCartButton = ({ card, variant = 'secondary' }) => {
  const { getTranslation } = useTranslationNamespace('common');
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(card));
  };

  return (
    <Button onClick={handleAddToCart} variant={variant}>
      {getTranslation('addToCart')}
    </Button>
  );
};
export default AddToCartButton;
