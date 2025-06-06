import cl from './index.module.scss';
import ImgDesk from '@pages/ProductPage/Card/ProductDetails/ImgCard/ImgDesk';
import TitleCard from '@pages/ProductPage/Card/ProductDetails/Title/TitleCard';
import ProductRating from '@pages/ProductPage/Card/ProductDetails/Rating/ProductRating';
import Article from '@pages/ProductPage/Card/ProductDetails/Article/Article';
import Price from '@pages/ProductPage/Card/ProductDetails/Price/Price';
import Counter from '@pages/ProductPage/Card/ProductDetails/Counter/Counter';
import Volume from '@pages/ProductPage/Card/ProductDetails/Volume/Volume';
import AddToCartButton from '@pages/CatalogPage/Products/CardsContainer/Card/AddToCartButton/AddToCardButton';

const DesktopView = ({ card, count, setCount }) => {
  return (
    <>
      <ImgDesk card={card} />
      <div className={cl.rightCase}>
        <Article card={card} />
        <TitleCard card={card} />
        <ProductRating card={card} />
        <div className={cl.wrapOrder}>
          <Price card={card} />
          <Counter count={count} setCount={setCount} />
          <Volume card={card} />
        </div>
        <AddToCartButton count={count} card={card} variant={'primary'} />
      </div>
    </>
  );
};
export default DesktopView;
