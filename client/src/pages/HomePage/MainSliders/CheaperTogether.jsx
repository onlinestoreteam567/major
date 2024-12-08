import cl from './index.module.scss';
import Heading from '@UI/Texts/Heading/Heading';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import SliderBoxMain from '@components/UI/Sliders/SliderBoxMain';
import cards from '../cards_of_category.json';

const CheaperTogether = () => {
  const { getTranslation } = useTranslationNamespace('common');
  return (
    <section className={cl.wrapSliders}>
      <Heading type="h2">{getTranslation('cheaperTogether')}</Heading>
      <SliderBoxMain slidesData={cards} />
    </section>
  );
};

export default CheaperTogether;
