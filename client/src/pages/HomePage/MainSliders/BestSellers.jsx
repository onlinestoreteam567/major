import cl from './index.module.scss';
import Heading from '@UI/Texts/Heading/Heading';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import SliderBoxMain from '@components/UI/Sliders/SliderBoxMain';
import { useSelector } from 'react-redux';
// import cards from '../cards_of_category.json';

const BestSellers = () => {
  const { items } = useSelector((state) => state.bestSellers);

  const { getTranslation } = useTranslationNamespace('common');
  return (
    <section className={cl.wrapSliders}>
      <Heading type="h2">{getTranslation('bestSellers')}</Heading>
      <SliderBoxMain slidesData={items} />
    </section>
  );
};

export default BestSellers;
