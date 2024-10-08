import BestSellersBanner from '../components/UI/BestSellersBanner/BestSellersBanner';
import Catalog from '../components/UI/Catalog/Catalog';
import MainBanner from '../components/UI/MainBanner/MainBanner';
import MessageBot from '../components/UI/MessageBot/MessageBot';
import OurPartners from '../components/UI/OurPartners/OurPartners';
import MajorInfo from '../components/UI/MajorInfo/MajorInfo';
import WhyChooseUs from '../components/UI/WhyChooseUs/WhyChooseUs';

const HomePage = () => {
  return (
    <div>
      <MainBanner />
      <MessageBot />
      <BestSellersBanner />
      <Catalog />
      <MajorInfo />
      <WhyChooseUs />
      <OurPartners />
    </div>
  );
};

export default HomePage;
