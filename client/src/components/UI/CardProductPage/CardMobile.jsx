import Button from '../Button/Button';
import Article from '../CardProduct/Article/Article';
import Counter from '../CardProduct/Counter/Counter';
import ImgMobile from '../CardProduct/ImgCard/ImgMobile';
import Price from '../CardProduct/Price/Price';
import ProductRating from '../CardProduct/Rating/ProductRating';
import LeaveFeedback from '../CardProduct/Review/LeaveFeedback';
import Title from '../CardProduct/Title/Title';
import Volume from '../CardProduct/Volume/Volume';
import cl from './index.module.scss';

export default function CardMobile({ card }) {
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
