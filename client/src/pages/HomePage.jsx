import BestSellersBanner from '@components/UI/BestSellers/BestSellers';
import Catalog from '@components/UI/Catalog/Catalog';
import MainBanner from '@components/UI/MainBanner/MainBanner';
import YellowButtonMainWrapper from '@components/UI/YellowButton/YellowButtonMainWrapper';
import OurPartners from '@components/UI/OurPartners/OurPartners';
import MajorInfo from '@components/UI/MajorInfo/MajorInfo';
import WhyChooseUs from '@components/UI/WhyChooseUs/WhyChooseUs';
import CheaperTogetherBanner from '@components/UI/CheaperTogether/CheaperTogether';
import CommentsBanner from '@components/UI/CommentsBanner/CommentsBanner';

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
      <OurPartners />
      <CommentsBanner />
    </div>
  );
};

export default HomePage;
