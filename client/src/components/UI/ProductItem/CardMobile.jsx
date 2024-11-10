import Button from '../Button/Button';
import Article from './Article';
import card from './card.json';
import Counter from './Counter';
import ImgMobile from './ImgMobile';
import cl from './index.module.scss';
import LeaveFeedback from './LeaveFeedback';
import Price from './Price';
import ProductRating from './ProductRating';
import Title from './Title';
import Volume from './Volume';

export default function CardMobile() {
  const getConsole = () => {
    console.log('Hello word');
  };

  return (
    <div className={cl.wrapItem}>
      <ImgMobile card={card} />
      <Title card={card} />
      <div className={cl.wrapOrder}>
        <ProductRating />
        <LeaveFeedback />
      </div>
      <Article card={card} />
      <div className={cl.wrapOrder}>
        <Price card={card} />
        <Counter />
      </div>
      <Volume card={card} />
      <Button onClick={getConsole}>Додати до кошику</Button>
    </div>
  );
}
