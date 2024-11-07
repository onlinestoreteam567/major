import cl from './index.module.scss';
import slidesData from './data';
import Banner from '@UI/Banner/Banner';
import H2 from '@components/UI/Hs/H2/H2';

const BestSellers = () => {
  return (
    <div className={`slider-container ${cl.bestSellersWrapper}`}>
      <H2>Хіти продажу</H2>

      <Banner slidesData={slidesData} />
    </div>
  );
};

export default BestSellers;
