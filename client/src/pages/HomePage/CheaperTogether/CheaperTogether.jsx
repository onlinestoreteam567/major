import cl from './index.module.scss';
import slidesData from './data';
import Banner from '../../../components/UI/Banner/Banner';

const CheaperTogether = () => {
  return (
    <div className={`slider-container ${cl.cheaperTogetherWrapper}`}>
      <h2>Разом дешевше</h2>

      <Banner slidesData={slidesData} />
    </div>
  );
};

export default CheaperTogether;
