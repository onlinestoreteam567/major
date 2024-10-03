import BestSellersBanner from "../components/UI/BestSellersBanner/BestSellersBanner";
import Catalog from "../components/UI/Catalog/Catalog";
import MainBanner from "../components/UI/MainBanner/MainBanner";
import OurPartners from "../components/UI/OurPartners/OurPartners";
const HomePage = () => {
  return (
    <div>
      <MainBanner />
      <BestSellersBanner />
      <Catalog />
      <OurPartners />
    </div>
  );
};

export default HomePage;
