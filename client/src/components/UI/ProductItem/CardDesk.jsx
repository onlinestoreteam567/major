import Button from '../Button/Button';
import Article from './Article';
import card from './card.json';
import Counter from './Counter';
import ImgDesk from './ImgDesk';
import cl from './index.module.scss';
import LeaveFeedback from './LeaveFeedback';
import Price from './Price';
import ProductRating from './ProductRating';
import Title from './Title';
import Volume from './Volume';

export default function CardDesk() {
  const getConsole = () => {
    console.log('Hello word');
  };
  return (
    <div className={cl.wrapItem}>
      <ImgDesk card={card} />
      <div className={cl.rightCase}>
        <Article card={card} />
        <Title card={card} />
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
