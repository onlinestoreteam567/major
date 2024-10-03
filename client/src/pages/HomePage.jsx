import BestSellersBanner from "../components/UI/BestSellersBanner/BestSellersBanner";
import Catalog from "../components/UI/Catalog/Catalog";
import MainBanner from "../components/UI/MainBanner/MainBanner";
const HomePage = () => {
  return (
    <div>
      <MainBanner />
      <BestSellersBanner />
      <Catalog />
    </div>
  );
};

export default HomePage;
