import BestSellersBanner from '@pages/HomePage/BestSellers/BestSellers';
import Catalog from '@pages/HomePage/Catalog/Catalog';
import MainBanner from '@components/UI/MainBanner/MainBanner';
import YellowButtonMainWrapper from '@pages/HomePage/YellowButton/YellowButtonMainWrapper';
import OurPartners from '@pages/HomePage/OurPartners/OurPartners';
import MajorInfo from '@pages/HomePage/MajorInfo/MajorInfo';
import WhyChooseUs from '@pages/HomePage/WhyChooseUs/WhyChooseUs';
import CheaperTogetherBanner from '@pages/HomePage/CheaperTogether/CheaperTogether';
import Comments from '@pages/HomePage/Comments/Comments';

const HomePage = () => {
  return (
    <div>
      <MainBanner />
      <YellowButtonMainWrapper />
      <BestSellersBanner />
      <CheaperTogetherBanner />
      <Catalog />
      <MajorInfo />
      <WhyChooseUs />
      <Comments />
      <OurPartners />
    </div>
  );
};

export default HomePage;
