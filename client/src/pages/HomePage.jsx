import BestSellersBanner from "../components/UI/BestSellersBanner/BestSellersBanner";
import Catalog from "../components/UI/Catalog/Catalog";
import MainBanner from "../components/UI/MainBanner/MainBanner";
import MajorInfo from "../components/UI/MajorInfo/MajorInfo";
import WhyChooseUs from "../components/UI/WhyChooseUs/WhyChooseUs";
const HomePage = () => {
  return (
    <div>
      <MainBanner />
      <BestSellersBanner />
      <Catalog />
      <MajorInfo />
      <WhyChooseUs />
    </div>
  );
};

export default HomePage;
