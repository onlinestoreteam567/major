import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import cl from './index.module.scss';
import Button from '@components/UI/Button/Button';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const HeaderCartEmpty = ({ onClick }) => {
  const { getTranslation } = useTranslationNamespace('basket');

  return (
    <>
      <div className={cl.emptyBasketText}>
        <Paragraph type="body1">{getTranslation('emptyBasket')}</Paragraph>
      </div>
      <div className={cl.emptyBasketButtonWrapper}>
        <Button variant="secondary" onClick={onClick} ariaLabel={getTranslation('basketButtonAriaLabel')}>
          {getTranslation('continueShopping')}
        </Button>
      </div>
    </>
  );
};
export default HeaderCartEmpty;
