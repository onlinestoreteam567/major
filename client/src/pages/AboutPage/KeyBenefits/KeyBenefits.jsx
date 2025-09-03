import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import useScreenSizes from '@hooks/useScreenSizes/useScreenSizes';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import BannerBenefits from './BannerBenefits/BannerBenefits';
import PaginatedBenefits from './PaginatedBenefits/PaginatedBenefits';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
const KeyBenefits = () => {
  const { tablet, deskmin, deskmax } = useScreenSizes();
  const isNotShowBanner = tablet || deskmin || deskmax;
  const { getTranslation } = useTranslationNamespace('aboutPage');

  return (
    <div className={cl.keyBenefits}>
      <Heading type="h2">{getTranslation('keyBenefitsMainTitle')}</Heading>
      <Paragraph type="body1">{getTranslation('keyBenefitsMainParagraph')}</Paragraph>
      {!isNotShowBanner ? <BannerBenefits /> : <PaginatedBenefits />}
    </div>
  );
};
export default KeyBenefits;
