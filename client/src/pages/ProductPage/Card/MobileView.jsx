import ImgMobile from '@components/UI/CardProduct/ImgCard/ImgMobile';
import TitleCard from '@components/UI/CardProduct/Title/TitleCard';
import ProductRating from '@components/UI/CardProduct/Rating/ProductRating';
import Article from '@components/UI/CardProduct/Article/Article';
import Price from '@components/UI/CardProduct/Price/Price';
import Counter from '@components/UI/CardProduct/Counter/Counter';
import Volume from '@components/UI/CardProduct/Volume/Volume';
import AddToCartButton from '@pages/CatalogPage/Products/CardsContainer/Card/AddToCartButton/AddToCardButton';
import cl from './index.module.scss';

const MobileView = ({ card, count, setCount }) => {
  return (
    <>
      <ImgMobile card={card} />
      <TitleCard card={card} />
      <ProductRating card={card} />
      <Article card={card} />
      <div className={cl.wrapOrder}>
        <Price card={card} />
        <Counter count={count} setCount={setCount} />
      </div>
      <Volume card={card} />
      <AddToCartButton count={count} card={card} variant={'primary'} />
    </>
  );
};
export default MobileView;
