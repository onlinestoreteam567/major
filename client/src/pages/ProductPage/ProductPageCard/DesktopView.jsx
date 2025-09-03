import cl from './index.module.scss';
import ImgDesk from '@pages/ProductPage/ProductPageCard/ProductPageCardDetails/ProductPageCardImage/ImgDesk/ImgDesk';
import ProductRating from '@UI/ProductRating/ProductRating';
import ButtonAddToCart from '@components/UI/Button/ButtonAddToCart';
import ProductPageCardArticle from '@pages/ProductPage/ProductPageCard/ProductPageCardDetails/ProductPageCardArticle/ProductPageCardArticle';
import ProductPageCardTitle from '@pages/ProductPage/ProductPageCard/ProductPageCardDetails/ProductPageCardTitle/ProductPageCardTitle';
import ProductPageCardPrice from '@pages/ProductPage/ProductPageCard/ProductPageCardDetails/ProductPageCardPrice/ProductPageCardPrice';
import ProductPageCardCounter from '@pages/ProductPage/ProductPageCard/ProductPageCardDetails/ProductPageCardCounter/ProductPageCardCounter';
import ProductVolume from '@pages/ProductPage/ProductPageCard/ProductPageCardDetails/ProductVolume/ProductVolume';

const DesktopView = ({ card, count, setCount }) => {
  return (
    <>
      <ImgDesk card={card} />
      <div className={cl.rightCase}>
        <ProductPageCardArticle card={card} />
        <ProductPageCardTitle card={card} />
        <ProductRating card={card} />
        <div className={cl.wrapOrder}>
          <ProductPageCardPrice card={card} />
          <ProductPageCardCounter count={count} setCount={setCount} />
          <ProductVolume card={card} />
        </div>
        <ButtonAddToCart count={count} card={card} variant={'primary'} />
      </div>
    </>
  );
};
export default DesktopView;
