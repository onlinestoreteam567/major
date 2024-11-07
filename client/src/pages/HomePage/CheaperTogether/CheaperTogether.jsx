import cl from './index.module.scss';
import slidesData from './data';
import Banner from '@UI/Banner/Banner';
import H2 from '@components/UI/Hs/H2/H2';

const CheaperTogether = () => {
  return (
    <div className={`slider-container ${cl.cheaperTogetherWrapper}`}>
      <H2>Разом дешевше</H2>

      <Banner slidesData={slidesData} />
    </div>
  );
};

export default CheaperTogether;
