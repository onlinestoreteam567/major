import useTranslationNamespace from '@hooks/useTranslationNamespace';
import { Helmet } from 'react-helmet-async';
import Comments from './Comments/Comments';
import HomeCatalogSection from './HomeCatalogSection/HomeCatalogSection';
import cl from './index.module.scss';
import MainBanner from './MainBanner/MainBanner';
import BestSellers from './MainSliders/BestSellers';
import Sets from './MainSliders/Sets';
import MajorInfo from './MajorInfo/MajorInfo';
import OurPartners from './OurPartners/OurPartners';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs';
import YellowButton from './YellowButton/YellowButton';

const HomePage = () => {
  const { getTranslation } = useTranslationNamespace('common');

  return (
    <div className={cl.homePage}>
      <Helmet>
        <title>{getTranslation('metaTitle')}</title>
        <meta name="description" content={getTranslation('metaDescription')} />
      </Helmet>

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
        <OurPartners isShowButton={true} />
      </div>
    </div>
  );
};

export default HomePage;
