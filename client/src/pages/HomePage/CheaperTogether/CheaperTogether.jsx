import cl from './index.module.scss';
import slidesData from './data';
import Banner from '@UI/Banner/Banner';
import Heading from '@components/UI/Heading/Heading';

const CheaperTogether = () => {
  return (
    <div className={`slider-container ${cl.cheaperTogetherWrapper}`}>
      <Heading type={'h2'}>Разом дешевше</Heading>

      <Banner slidesData={slidesData} />
    </div>
  );
};

export default CheaperTogether;
