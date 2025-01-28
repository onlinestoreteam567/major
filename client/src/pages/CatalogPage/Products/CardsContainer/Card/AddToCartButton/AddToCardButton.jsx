import Button from '@components/UI/Button/Button';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const AddToCartButton = ({ variant = 'secondary' }) => {
  const { getTranslation } = useTranslationNamespace('common');

  return <Button variant={variant}>{getTranslation('addToCart')}</Button>;
};
export default AddToCartButton;
