import Button from '@components/UI/Button/Button';
import Article from '@components/UI/CardProduct/Article/Article';
import Counter from '@components/UI/CardProduct/Counter/Counter';
import ImgDesk from '@components/UI/CardProduct/ImgCard/ImgDesk';
import Price from '@components/UI/CardProduct/Price/Price';
import TitleCard from '@components/UI/CardProduct/Title/TitleCard';
import ProductRating from '@components/UI/CardProduct/Rating/ProductRating';
import LeaveFeedback from '@components/UI/CardProduct/Review/LeaveFeedback';
import Volume from '@components/UI/CardProduct/Volume/Volume';
import cl from './index.module.scss';

export default function CardDesk({ card }) {
  const getConsole = () => {
    console.log('Hello word');
  };
  return (
    <div className={cl.wrapItem}>
      <ImgDesk card={card} />
      <div className={cl.rightCase}>
        <Article card={card} />
        <TitleCard card={card} />
        <div className={cl.wrapOrder}>
          <ProductRating />
          <LeaveFeedback />
        </div>

        <div className={cl.wrapOrder}>
          <Price card={card} />
          <Counter />
          <Volume card={card} />
        </div>
        <Button onClick={getConsole}>Додати до кошику</Button>
      </div>
    </div>
  );
}
