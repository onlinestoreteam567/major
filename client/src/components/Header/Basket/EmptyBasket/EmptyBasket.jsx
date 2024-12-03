import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import cl from './index.module.scss';
import Button from '@components/UI/Button/Button';

const EmptyBasket = ({ onClick }) => {
  return (
    <>
      <div className={cl.emptyBasketText}>
        <Paragraph type="body1">У вашому кошику зараз немає товарів</Paragraph>
      </div>
      <div className={cl.emptyBasketButtonWrapper}>
        <Button variant="secondary" onClick={onClick}>
          Продовжити покупки
        </Button>
      </div>
    </>
  );
};
export default EmptyBasket;
