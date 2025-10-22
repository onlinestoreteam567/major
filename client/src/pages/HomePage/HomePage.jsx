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
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import { useEffect, useState } from 'react';
import { bestSellerReducer } from '@redux/products/bestSlice';
import { injectReducers } from '@config/store';
import { setsReducer } from '@redux/products/setsSlice';
import Spinner from '@components/UI/Spinner/Spinner';
import { categoryReducer } from '@redux/params/categorySlice';
import { filterReducer } from '@redux/filter/filterSlice';
import { bannerReducer } from '@redux/banner/bannerSlice';
import { partnersReducer } from '@redux/partners/partnerSlice';
import { reviewReducer } from '@redux/reviews/reviewsSlice';

const HomePage = () => {
  const { getTranslation } = useTranslationNamespace('common');
  const [isReducerLoaded, setIsReducerLoaded] = useState(false);

  const homePageReducers = {
    bests: bestSellerReducer,
    sets: setsReducer,
    category: categoryReducer,
    filter: filterReducer,
    banner: bannerReducer,
    partners: partnersReducer,
    reviews: reviewReducer,
  };

  useEffect(() => {
    injectReducers(homePageReducers);
    setIsReducerLoaded(true);
  }, []);

  return (
    <div className={cl.homePage}>
      <Helmet>
        <title>{getTranslation('metaTitle')}</title>
        <meta name="description" content={getTranslation('metaDescription')} />
      </Helmet>

      {!isReducerLoaded ? (
        <Spinner />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default HomePage;
