import cl from './index.module.scss';
import Heading from '@UI/Texts/Heading/Heading';
import AccentText from '@UI/Texts/AccentText/AccentText';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import AddToCartButton from '@pages/CatalogPage/Products/CardsContainer/Card/AddToCartButton/AddToCardButton';
import ButtonAriaLabel from '@components/UI/Button/ButtonAriaLabel/ButtonAriaLabel';

const Slide = ({ slide, next, previous }) => {
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
      <ButtonAriaLabel al="previous" onClick={previous} cn />
      <img src="/images/banners/mainBanner/background.webp" alt="" className={cl.flowersBackground} />
      <div className={`${cl.slide} ${slide.left ? cl.right : ''}`}>
        {slide.left && <img src={slide.image_url} alt="" />}
        <section>
          <div className={cl.label}>{labelText && <AccentText>{getTranslation(labelText)}</AccentText>}</div>
          <div className={cl.bottomWrapper}>
            <Heading type="h1">{getTranslation(slide.product.name)}</Heading>
            <div style={{ position: 'relative', zIndex: 1 }}>
              {' '}
              {/* Create local stacking context */}
              <AddToCartButton variant="primary" card={slide.product} style={{ zIndex: 2 }} />
              {/* Any other elements within this wrapper can have z-index values */}
            </div>
          </div>
        </section>
        {!slide.left && <img src={slide.image_url} alt="" />}
      </div>
      <ButtonAriaLabel al="next" onClick={next} />
    </div>
  );
};

export default Slide;
