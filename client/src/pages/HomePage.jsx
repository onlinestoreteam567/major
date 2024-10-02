import BestSellersBanner from "../components/UI/BestSellersBanner/BestSellersBanner";
import Catalog from "../components/UI/Catalog/Catalog";
import MainBanner from "../components/UI/MainBanner/MainBanner";
import MajorInfo from "../components/UI/MajorInfo/MajorInfo";
const HomePage = () => {
  return (
    <div>
      <MainBanner />
      <BestSellersBanner />
      <Catalog />
      <MajorInfo />
    </div>
  );
};

export default HomePage;
