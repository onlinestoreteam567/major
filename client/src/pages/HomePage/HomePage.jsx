import cl from './index.module.scss';
import BestSellers from './MainSliders/BestSellers';

const HomePage = () => {
  return (
    <div className={cl.homePage}>
      {/* <div className={cl.banner}>
        <MainBanner />
      </div> */}
      <div className={cl.page}>
        {/* <YellowButton /> */}
        <BestSellers />
        {/* <Sets />
        <Catalog />
        <MajorInfo />
        <WhyChooseUs />
        <Comments />
        <OurPartners /> */}
      </div>
    </div>
  );
};

export default HomePage;
