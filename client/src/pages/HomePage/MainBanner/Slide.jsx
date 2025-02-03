import Button from '@UI/Button/Button';
import cl from './index.module.scss';
import Heading from '@UI/Texts/Heading/Heading';
import AccentText from '@UI/Texts/AccentText/AccentText';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const Slide = ({ slide }) => {
  const { getTranslation } = useTranslationNamespace('mainBanner');

  return (
    <div style={{ backgroundImage: `url(${slide.background})` }} className={cl.wrapBackground}>
      <img src="/images/banners/mainBanner/background.png" alt="" className={cl.flowersBackground} />
      <div className={`${cl.slide} ${slide.left ? cl.right : ''}`}>
        {slide.left && <img src={slide.image} alt="" />}
        <section>
          <div className={cl.label}>
            <AccentText>{getTranslation(slide.labelText)}</AccentText>
          </div>
          <div className={cl.bottomWrapper}>
            <Heading type="h1">{getTranslation(slide.title)}</Heading>
            <Button>{getTranslation('addToCart', 'common')}</Button>
          </div>
        </section>
        {!slide.left && <img src={slide.image} alt="" />}
      </div>
    </div>
  );
};

export default Slide;
