import { Link } from 'react-router-dom';
import BestSellers from './BestSellers/BestSellers';
import Catalog from './Catalog/Catalog';
import CheaperTogether from './CheaperTogether/CheaperTogether';
import Comments from './Comments/Comments';
import MainBanner from './MainBanner/MainBanner';
import MajorInfo from './MajorInfo/MajorInfo';
import OurPartners from './OurPartners/OurPartners';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import YellowButtonMainWrapper from './YellowButton/YellowButtonMainWrapper';

const HomePage = () => {
  return (
    <div>
      <MainBanner />
      <YellowButtonMainWrapper />
      <BestSellers />
      <CheaperTogether />
      <Catalog />
      <MajorInfo />
      <WhyChooseUs />
      <Comments />
      <OurPartners />
    </div>
  );
};

export default HomePage;
