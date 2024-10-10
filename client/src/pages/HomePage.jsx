import BestSellersBanner from '../components/UI/BestSellersBanner/BestSellersBanner';
import Catalog from '../components/UI/Catalog/Catalog';
import MainBanner from '../components/UI/MainBanner/MainBanner';
import YellowCircle from '../components/UI/YellowCircle/YellowCircle';
import OurPartners from '../components/UI/OurPartners/OurPartners';
import MajorInfo from '../components/UI/MajorInfo/MajorInfo';
import WhyChooseUs from '../components/UI/WhyChooseUs/WhyChooseUs';

const HomePage = () => {
  return (
    <div>
      <MainBanner />
      <YellowCircle />
      <BestSellersBanner />
      <Catalog />
      <MajorInfo />
      <WhyChooseUs />
      <OurPartners />
    </div>
  );
};

export default HomePage;
