import BestSellersBanner from '@components/UI/BestSellers/BestSellers';
import Catalog from '@components/UI/Catalog/Catalog';
import MainBanner from '@components/UI/MainBanner/MainBanner';
import YellowButtonMainWrapper from '@components/UI/YellowButton/YellowButtonMainWrapper';
import OurPartners from '@components/UI/OurPartners/OurPartners';
import MajorInfo from '@components/UI/MajorInfo/MajorInfo';
import WhyChooseUs from '@components/UI/WhyChooseUs/WhyChooseUs';
import CheaperTogetherBanner from '@components/UI/CheaperTogether/CheaperTogether';
import Comments from '@components/UI/Comments/Comments';

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
