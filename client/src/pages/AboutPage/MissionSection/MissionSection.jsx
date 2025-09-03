import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const MissionSection = () => {
  const { getTranslation } = useTranslationNamespace('aboutPage');

  return (
    <section className={cl.missionSection}>
      <Heading type="h2">{getTranslation('majorIsMoreThanJustABusiness')}</Heading>
      <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <img src="/images/about/missionSection.webp" alt={getTranslation('missionImgAlt')} />
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
