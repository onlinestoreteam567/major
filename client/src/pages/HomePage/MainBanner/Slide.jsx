import Button from '@UI/Button/Button';
import cl from './index.module.scss';
import Heading from '@UI/Texts/Heading/Heading';
import AccentText from '@UI/Texts/AccentText/AccentText';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const Slide = ({ slide }) => {
  const { getTranslation } = useTranslationNamespace('mainBanner');

  const styleVariables = {
    '--background-image': `url(${slide.background})`,
    '--button-hover': slide.buttonHoverColor,
    '--label-color': slide.labelColor,
  };

  return (
    <div className={`${cl.slide} ${slide.left ? cl.right : ''}`} style={styleVariables}>
      {slide.left && <img src={slide.image} alt="" />}
      <section>
        <div className={cl.label}>
          <AccentText>{getTranslation(slide.labelText)}</AccentText>
        </div>
        <div className={cl.bottomWrapper}>
          <Heading type="h1">{getTranslation(slide.title)}</Heading>
          <Button variant="banner">{getTranslation('addToCart', 'common')}</Button>
        </div>
      </section>
      {!slide.left && <img src={slide.image} alt="" />}
    </div>
  );
};

export default Slide;
