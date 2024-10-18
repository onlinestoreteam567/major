import BestSellersBanner from '../components/UI/BestSellersBanner/BestSellersBanner';
import Catalog from '../components/UI/Catalog/Catalog';
import MainBanner from '../components/UI/MainBanner/MainBanner';
import YellowButtonWrapper from '../components/UI/YellowButton/YellowButtonWrapper';
import OurPartners from '../components/UI/OurPartners/OurPartners';
import MajorInfo from '../components/UI/MajorInfo/MajorInfo';
import WhyChooseUs from '../components/UI/WhyChooseUs/WhyChooseUs';

const HomePage = () => {
  return (
    <div>
      <MainBanner />
      <YellowButtonWrapper />
      <BestSellersBanner />
      <Catalog />
      <MajorInfo />
      <WhyChooseUs />
      <OurPartners />
    </div>
  );
};

export default HomePage;
