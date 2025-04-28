import cl from './index.module.scss';
import ImgDesk from '@components/UI/CardProduct/ImgCard/ImgDesk';
import TitleCard from '@components/UI/CardProduct/Title/TitleCard';
import ProductRating from '@components/UI/CardProduct/Rating/ProductRating';
import Article from '@components/UI/CardProduct/Article/Article';
import Price from '@components/UI/CardProduct/Price/Price';
import Counter from '@components/UI/CardProduct/Counter/Counter';
import Volume from '@components/UI/CardProduct/Volume/Volume';
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
