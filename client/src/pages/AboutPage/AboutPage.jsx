import cl from './index.module.scss';
import KeyBenefits from './KeyBenefits/KeyBenefits';
import OurProduction from './OurProduction/OurProduction';
import YourTimeIsPriceless from './YourTimeIsPriceless/YourTimeIsPriceless';
import AboutBanner from './AboutBanner/AboutBanner';
import MissionSection from './MissionSection/MissionSection';
import OriginStorySection from './OriginStorySection/OriginStorySection';
import BrandValues from './BrandValues/BrandValues';
import Formula from './Formula/Formula';
import { Helmet } from 'react-helmet-async';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const AboutPage = () => {
  const { getTranslation } = useTranslationNamespace('aboutPage');

  return (
    <div className={cl.aboutPage}>
      <Helmet>
        <title>{getTranslation('metaTitle')}</title>
        <meta name="description" content={getTranslation('metaDescription')} />
      </Helmet>

      <AboutBanner />
      <MissionSection />
      <OriginStorySection />
      <BrandValues />
      <KeyBenefits />
      <Formula />
      <OurProduction />
      <YourTimeIsPriceless />
    </div>
  );
};

export default AboutPage;
