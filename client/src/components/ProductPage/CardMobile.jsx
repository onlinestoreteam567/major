import ImgMobile from '@components/UI/CardProduct/ImgCard/ImgMobile';
import TitleCard from '@components/UI/CardProduct/Title/TitleCard';
import ProductRating from '@components/UI/CardProduct/Rating/ProductRating';
import LeaveFeedback from '@components/UI/CardProduct/Review/LeaveFeedback';
import Article from '@components/UI/CardProduct/Article/Article';
import Price from '@components/UI/CardProduct/Price/Price';
import Counter from '@components/UI/CardProduct/Counter/Counter';
import Volume from '@components/UI/CardProduct/Volume/Volume';
import cl from './index.module.scss';
import AddToCartButton from '@pages/CatalogPage/Products/CardsContainer/Card/AddToCartButton/AddToCardButton';

export default function CardMobile({ card }) {
  return (
    <div className={cl.wrapItem}>
      <ImgMobile card={card} />
      <TitleCard card={card} />
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
      <AddToCartButton variant={'primary'} />
    </div>
  );
}
