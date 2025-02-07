import cl from './index.module.scss';
import Catalog from './Catalog/Catalog';
import Comments from './Comments/Comments';
import MainBanner from './MainBanner/MainBanner';
import MajorInfo from './MajorInfo/MajorInfo';
import OurPartners from './OurPartners/OurPartners';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import YellowButtonMainWrapper from './YellowButton/YellowButtonMainWrapper';
import BestSellers from './MainSliders/BestSellers';
import Sets from './MainSliders/Sets';
import DraggableResizableImage from './DraggableResizableImage';

const HomePage = () => {
  return (
    <div className={cl.homePage}>
      <div className={cl.banner}>
        <MainBanner />
      </div>
      <div className={cl.page}>
        <DraggableResizableImage />
        <YellowButtonMainWrapper />
        <BestSellers />
        <Sets />
        <Catalog />
        <MajorInfo />
        <WhyChooseUs />
        <Comments />
        <OurPartners />
      </div>
    </div>
  );
};

export default HomePage;
