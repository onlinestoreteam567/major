import cl from './index.module.scss';
import Heading from '@UI/Texts/Heading/Heading';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import SliderBoxMain from '@components/UI/Sliders/SliderBoxMain';
import { useSelector } from 'react-redux';

const BestSellers = () => {
  const { items, status, error } = useSelector((state) => state.bestSellers);

  const { getTranslation } = useTranslationNamespace('common');

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <section className={cl.wrapSliders}>
      <Heading type="h2">{getTranslation('bestSellers')}</Heading>
      <SliderBoxMain slidesData={items} />
    </section>
  );
};

export default BestSellers;
