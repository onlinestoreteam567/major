import cl from './index.module.scss';
import slidesData from './data';
import Banner from '../../../components/UI/Banner/Banner';

const BestSellers = () => {
  return (
    <div className={`slider-container ${cl.bestSellersWrapper}`}>
      <h2>Хіти продажу</h2>

      <Banner slidesData={slidesData} />
    </div>
  );
};

export default BestSellers;
