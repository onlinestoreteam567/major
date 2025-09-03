import cl from './index.module.scss';
import HomeCatalogSection from './HomeCatalogSection/HomeCatalogSection';
import Comments from './Comments/Comments';
import MainBanner from './MainBanner/MainBanner';
import MajorInfo from './MajorInfo/MajorInfo';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import YellowButton from './YellowButton/YellowButton';
import BestSellers from './MainSliders/BestSellers';
import Sets from './MainSliders/Sets';
import OurPartners from './OurPartners/OurPartners';

const HomePage = () => {
  return (
    <div className={cl.homePage}>
      <div className={cl.banner}>
        <MainBanner />
      </div>
      <div className={cl.page}>
        <YellowButton />
        <BestSellers />
        <Sets />
        <HomeCatalogSection />
        <MajorInfo />
        <WhyChooseUs />
        <Comments />
        <OurPartners />
      </div>
    </div>
  );
};

export default HomePage;
