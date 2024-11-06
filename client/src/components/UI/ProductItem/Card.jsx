import Button from '../Button/Button';
import UserRating from '../UserReviews/UserRating';
import Article from './Article';
import card from './card.json';
import Counter from './Counter';
import Description from './Description';
import ImgMobile from './ImgMobile';
import cl from './index.module.scss';
import LabelHit from './LabelHit';
import LabelNew from './LabelNew';
import LabelSale from './LabelSale';
import LeaveFeedback from './LeaveFeedback';
import Price from './Price';
import Title from './Title';
import Volume from './Volume';

export default function Card() {
  return (
    <div className={cl.wrapItemMob}>
      {card.is_best_seller ? <LabelHit /> : ''}
      {card.is_new ? <LabelNew /> : ''}
      {card.is_sale ? <LabelSale card={card} /> : ''}
      <ImgMobile card={card} />
      <Title card={card} />
      <div className={cl.wrapOrder}>
        <UserRating />
        <LeaveFeedback />
      </div>
      <Article card={card} />
      <div className={cl.wrapOrder}>
        <Price card={card} />
        <Counter />
      </div>
      <Volume card={card} />
      <Button>Додати до кошику</Button>
      <Description card={card} />
    </div>
  );
}
