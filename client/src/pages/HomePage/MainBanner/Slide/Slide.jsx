import cl from './index.module.scss';
import Heading from '@UI/Texts/Heading/Heading';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import ButtonAriaLabel from '@components/UI/Button/ButtonAriaLabel';
import ButtonAddToCart from '@components/UI/Button/ButtonAddToCart';
import { useImageError } from '@hooks/useImageError';
import { useEffect, useState } from 'react';

const SlideImage = ({ src, alt }) => {
  const [imageSrc, handleError] = useImageError(src, '/images/placeholderBanner.webp');
  const [isErrorStyling, setIsErrorStyling] = useState(false);

  const imageError = () => {
    handleError();
    setIsErrorStyling(true);
  };

  useEffect(() => {
    if (!src) {
      imageError();
    }
  });

  return (
    <img
      fetchpriority="high"
      className={isErrorStyling ? cl.errorImage : ''}
      src={imageSrc}
      alt={alt}
      onError={() => imageError()}
    />
  );
};

const Slide = ({ slide, next, previous }) => {
  const { getTranslation } = useTranslationNamespace('mainBanner');
  const [bgImageSrc] = useImageError(slide.background_image_url);
  const [isBgError, setIsBgError] = useState(false);

  const handleBgError = () => {
    setIsBgError(true);
  };

  const getLabelText = () => {
    if (slide.product.is_best_seller) return 'lableTextBestseller';
    if (slide.product.is_discount) return 'lableTextDiscount';
    if (slide.product.is_new) return 'lableTextNew';
    return null;
  };

  const labelText = getLabelText();

  const backgroundStyle = isBgError ? { backgroundColor: '#fff' } : { backgroundImage: `url(${bgImageSrc})` };

  return (
    <div style={backgroundStyle} className={cl.wrapBackground}>
      <ButtonAriaLabel al="previous" onClick={previous} cn />

      <div className={`${cl.slide} ${slide.left ? cl.right : ''}`}>
        {slide.left && <SlideImage src={slide.image_url} alt="" />}
        <section>
          <div className={cl.label}>{labelText && <p>{getTranslation(labelText)}</p>}</div>
          <div className={cl.bottomWrapper}>
            <Heading type="h1">{getTranslation(slide.product.name)}</Heading>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <ButtonAddToCart variant="primary" card={slide.product} style={{ zIndex: 2 }} />
            </div>
          </div>
        </section>
        {!slide.left && <SlideImage src={slide.image_url} alt="" />}
      </div>
      <ButtonAriaLabel al="next" onClick={next} />

      <img src={slide.background_image_url} onError={handleBgError} />
    </div>
  );
};

export default Slide;
