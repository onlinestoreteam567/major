import cl from './index.module.scss';
import HomeCatalogSection from './HomeCatalogSection/HomeCatalogSection';
import Comments from './Comments/Comments';
import MainBanner from './MainBanner/MainBanner';
import MajorInfo from './MajorInfo/MajorInfo';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import YellowButton from './YellowButton/YellowButton';
import BestSellers from './MainSliders/BestSellers';
import Sets from './MainSliders/Sets';
import OurPartners from './OurPartners/OurPartners';
import { Helmet } from 'react-helmet-async';

const siteName = 'Major';
const siteDescription = 'Дуже крутий опис для сайту';
const siteImage = 'https://major-gamma.vercel.app/svg/favicon.svg';

const HomePage = () => {
  return (
    <div className={cl.homePage}>
      {/* <Helmet>
        <title>Site name</title>
        <meta property="og:title" content="Site name" />
        <meta property="og:description" content="site desc" />
        <meta property="og:image" content="https://major-gamma.vercel.app/svg/favicon.svg" />
        <meta property="og:url" content="https://major-gamma.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="https://major-gamma.vercel.app/svg/favicon.svg" />
        <meta name="twitter:title" content={siteName} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content="https://major-gamma.vercel.app/svg/favicon.svg" />
      </Helmet> */}
      <div className={cl.banner}>
        <MainBanner />
      </div>
      <div className={cl.page}>
        <YellowButton />
        <BestSellers />
        <Sets />
        <HomeCatalogSection />
        <MajorInfo />
        <WhyChooseUs />
        <Comments />
        <OurPartners />
      </div>
    </div>
  );
};

export default HomePage;
