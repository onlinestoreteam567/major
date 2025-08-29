import cl from './index.module.scss';
import KeyBenefits from './KeyBenefits/KeyBenefits';
import OurProduction from './OurProduction/OurProduction';
import YourTimeIsPriceless from './YourTimeIsPriceless/YourTimeIsPriceless';
import AboutBanner from './AboutBanner/AboutBanner';
import MissionSection from './MissionSection/MissionSection';
import OriginStorySection from './OriginStorySection/OriginStorySection';
import BrandValues from './BrandValues/BrandValues';

const AboutPage = () => {
  return (
    <div className={cl.aboutPage}>
      <AboutBanner />
      <MissionSection />
      <OriginStorySection />
      <BrandValues />
      <KeyBenefits />
      <OurProduction />
      <YourTimeIsPriceless />
    </div>
  );
};

export default AboutPage;
