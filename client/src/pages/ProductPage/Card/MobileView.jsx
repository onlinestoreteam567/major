import ImgMobile from '@pages/ProductPage/Card/ProductDetails/ImgCard/ImgMobile';
import TitleCard from '@pages/ProductPage/Card/ProductDetails/Title/TitleCard';
import ProductRating from '@pages/ProductPage/Card/ProductDetails/Rating/ProductRating';
import Article from '@pages/ProductPage/Card/ProductDetails/Article/Article';
import Price from '@pages/ProductPage/Card/ProductDetails/Price/Price';
import Counter from '@pages/ProductPage/Card/ProductDetails/Counter/Counter';
import Volume from '@pages/ProductPage/Card/ProductDetails/Volume/Volume';
import cl from './index.module.scss';
import ButtonAddToCart from '@components/UI/Button/ButtonAddToCart';

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
      <ButtonAddToCart count={count} card={card} variant={'primary'} />
    </>
  );
};
export default MobileView;
