import Button from '../Button/Button';
import Article from '../CardProduct/Article/Article';
import Counter from '../CardProduct/Counter/Counter';
import ImgMobile from '../CardProduct/ImgCard/ImgMobile';
import Price from '../CardProduct/Price/Price';
import ProductRating from '../CardProduct/Rating/ProductRating';
import TitleCard from '../CardProduct/Title/TitleCard';
// import LeaveFeedback from '../CardProduct/Review/LeaveFeedback';
import Volume from '../CardProduct/Volume/Volume';
import cl from './index.module.scss';

export default function CardMobile({ card }) {
  const getConsole = () => {
    console.log('Hello word');
  };

  return (
    <div className={cl.wrapItem}>
      <ImgMobile card={card} />
      <TitleCard card={card} />
      <Article card={card} />
      <div className={cl.wrapOrder}>
        <Price card={card} />
        <Counter />
      </div>
      <div className={cl.wrapOrder}>
        <ProductRating />
        <Volume card={card} />
        {/* <LeaveFeedback /> */}
      </div>

      <Button onClick={getConsole}>Додати до кошику</Button>
    </div>
  );
}
