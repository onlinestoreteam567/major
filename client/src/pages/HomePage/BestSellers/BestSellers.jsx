import cl from './index.module.scss';
import slidesData from './data';
import Banner from '@UI/Banner/Banner';
import Heading from '@components/UI/Texts/Heading/Heading';

const BestSellers = () => {
  return (
    <section className={`slider-container ${cl.bestSellersWrapper}`}>
      <Heading type="h2">Хіти продажу</Heading>

      <Banner slidesData={slidesData} />
    </section>
  );
};

export default BestSellers;
