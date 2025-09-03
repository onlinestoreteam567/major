import ProductRating from '@UI/ProductRating/ProductRating';
import cl from './index.module.scss';
import ButtonAddToCart from '@components/UI/Button/ButtonAddToCart';
import ProductVolume from './ProductPageCardDetails/ProductVolume/ProductVolume';
import ProductPageCardArticle from '@pages/ProductPage/ProductPageCard/ProductPageCardDetails/ProductPageCardArticle/ProductPageCardArticle';
import ProductPageCardTitle from '@pages/ProductPage/ProductPageCard/ProductPageCardDetails/ProductPageCardTitle/ProductPageCardTitle';
import ImgMobile from './ProductPageCardDetails/ProductPageCardImage/ImgMobile/ImgMobile';
import ProductPageCardPrice from '@pages/ProductPage/ProductPageCard/ProductPageCardDetails/ProductPageCardPrice/ProductPageCardPrice';
import ProductPageCardCounter from '@pages/ProductPage/ProductPageCard/ProductPageCardDetails/ProductPageCardCounter/ProductPageCardCounter';

const MobileView = ({ card, count, setCount }) => {
  return (
    <>
      <ImgMobile card={card} />
      <ProductPageCardTitle card={card} />
      <ProductRating card={card} />
      <ProductPageCardArticle card={card} />
      <div className={cl.wrapOrder}>
        <ProductPageCardPrice card={card} />
        <ProductPageCardCounter count={count} setCount={setCount} />
      </div>
      <ProductVolume card={card} />
      <ButtonAddToCart count={count} card={card} variant={'primary'} />
    </>
  );
};
export default MobileView;
