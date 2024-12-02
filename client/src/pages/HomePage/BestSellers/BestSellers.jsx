import cl from './index.module.scss';
import slidesData from './data';
import Banner from '@UI/Banner/Banner';
import Heading from '@UI/Texts/Heading/Heading';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const BestSellers = () => {
  const { getTranslation } = useTranslationNamespace('common');
  return (
    <section className={`slider-container ${cl.bestSellersWrapper}`}>
      <Heading type="h2">{getTranslation('bestSellers')}</Heading>

      <Banner slidesData={slidesData} />
    </section>
  );
};

export default BestSellers;
