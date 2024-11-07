import cl from './index.module.scss';
import slidesData from './data';
import Banner from '@UI/Banner/Banner';
import Heading from '@components/UI/Heading/Heading';

const BestSellers = () => {
  return (
    <div className={`slider-container ${cl.bestSellersWrapper}`}>
      <Heading type={'h2'}>Хіти продажу</Heading>

      <Banner slidesData={slidesData} />
    </div>
  );
};

export default BestSellers;
