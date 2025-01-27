import Button from '@components/UI/Button/Button';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const AddToCartButton = () => {
  const { getTranslation } = useTranslationNamespace('common');

  return <Button variant="secondary">{getTranslation('addToCart')}</Button>;
};
export default AddToCartButton;
