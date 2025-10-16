import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const MissionSection = () => {
  const { getTranslation } = useTranslationNamespace('aboutPage');

  const mobileImagePath = '/images/about/missionSectionMobile.webp';
  const deskminImagePath = '/images/about/missionSectionDeskmin.webp';
  const deskmaxImagePath = '/images/about/missionSectionDeskmax.webp';

  return (
    <section className={cl.missionSection}>
      <Heading type="h2">{getTranslation('majorIsMoreThanJustABusiness')}</Heading>
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <picture>
          <source srcSet={deskmaxImagePath} media="(min-width: 1440px)" />
          <source srcSet={deskminImagePath} media="(min-width: 768px)" />
          <img src={mobileImagePath} alt={getTranslation('missionImgAlt')} />
        </picture>
      </div>
      <div>
        <Paragraph type="body1">{getTranslation('firstMissionParagraph')}</Paragraph>
        <Paragraph type="body1">{getTranslation('secondMissionParagraph')}</Paragraph>
        <Paragraph type="body1">
          {getTranslation('thirdMissionParagraph1')}
          <br />
          {getTranslation('thirdMissionParagraph2')} <br />
          {getTranslation('thirdMissionParagraph3')}
        </Paragraph>
      </div>
    </section>
  );
};
export default MissionSection;
