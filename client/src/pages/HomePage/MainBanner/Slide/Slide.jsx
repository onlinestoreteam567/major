import cl from './index.module.scss';
import Heading from '@UI/Texts/Heading/Heading';
import AccentText from '@UI/Texts/AccentText/AccentText';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import AddToCartButton from '@pages/CatalogPage/Products/CardsContainer/Card/AddToCartButton/AddToCardButton';

const Slide = ({ slide }) => {
  const { getTranslation } = useTranslationNamespace('mainBanner');
  const getLabelText = () => {
    if (slide.product.is_best_seller) return 'lableTextBestseller';
    if (slide.product.is_discount) return 'lableTextDiscount';
    if (slide.product.is_new) return 'lableTextNew';
    return null;
  };

  const labelText = getLabelText();

  return (
    <div style={{ backgroundImage: `url(${slide.background_image_url})` }} className={cl.wrapBackground}>
      <img src="/images/banners/mainBanner/background.webp" alt="" className={cl.flowersBackground} />
      <div className={`${cl.slide} ${slide.left ? cl.right : ''}`}>
        {slide.left && <img src={slide.image_url} alt="" />}
        <section>
          <div className={cl.label}>{labelText && <AccentText>{getTranslation(labelText)}</AccentText>}</div>

          <div className={cl.bottomWrapper}>
            <Heading type="h1">{getTranslation(slide.product.name)}</Heading>
            <AddToCartButton variant="primary" card={slide.product} />
          </div>
        </section>
        {!slide.left && <img src={slide.image_url} alt="" />}
      </div>
    </div>
  );
};

export default Slide;
