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
import Description from '@components/UI/CardProduct/Descript/Description';
import ListReviewsCard from '@components/UI/UserReviews/ListReviewsCard';
import { useState } from 'react';

export default function CardMobile({ card }) {
  const [count, setCount] = useState(1);

  return (
    <div className={cl.cardContainer}>
      <div className={cl.wrapItem}>
        <ImgMobile card={card} />
        <TitleCard card={card} />
        <div className={cl.wrapOrder}>
          <ProductRating card={card} />
          <LeaveFeedback card={card} />
        </div>
        <Article card={card} />
        <div className={cl.wrapOrder}>
          <Price card={card} />
          <Counter count={count} setCount={setCount} />
        </div>
        <Volume card={card} />
        <AddToCartButton count={count} card={card} variant={'primary'} />
      </div>
      <Description card={card} />
      <ListReviewsCard card={card} />
    </div>
  );
}
