import Button from '@UI/Button/Button';
import cl from './index.module.scss';
import Heading from '@UI/Texts/Heading/Heading';
import AccentText from '@UI/Texts/AccentText/AccentText';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const Slide = ({ labelText, title, slideClassName }) => {
  const { getTranslation } = useTranslationNamespace('mainBanner');
  return (
    <div className={`${cl.slide} ${cl[slideClassName]}`}>
      <section className={cl.mainSection}>
        <div className={cl.label}>
          <AccentText>{getTranslation(labelText)}</AccentText>
        </div>
        <div className={cl.bottomWrapper}>
          <Heading type="h1">{getTranslation(title)}</Heading>
          <Button variant="banner">{getTranslation('addToCart', 'common')}</Button>
        </div>
      </section>
    </div>
  );
};

export default Slide;
