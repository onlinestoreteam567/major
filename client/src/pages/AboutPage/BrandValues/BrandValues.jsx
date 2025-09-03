import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const BrandValues = () => {
  const { getTranslation } = useTranslationNamespace('aboutPage');

  return (
    <div className={cl.brandValues}>
      <img src="/svg/logo.svg" alt={getTranslation('brandValuesImgAlt')} />
      <img src="/images/about/aboutBackground.webp" alt={getTranslation('brandValuesImgBgAlt')} />
      <section>
        <Heading type="h3">
          <img src="/svg/about/pencilChat.svg" alt={getTranslation('brandValuesFirstHeadingImgAlt')} />{' '}
          {getTranslation('brandValuesFirstHeading')}
        </Heading>
        <Paragraph type="body1">
          {getTranslation('brandValuesFirstParagraph1')} <br />
          <br />
          {getTranslation('brandValuesFirstParagraph2')}
        </Paragraph>
      </section>
      <section>
        <Heading type="h3">
          <img src="/svg/about/arm.svg" alt={getTranslation('brandValuesSecondHeadingImgAlt')} />
          {getTranslation('brandValuesSecondHeading')}
        </Heading>
        <Paragraph type="body1">
          {getTranslation('brandValuesSecondParagraph1')} <br />
          <br />
          {getTranslation('brandValuesSecondParagraph2')}
        </Paragraph>
      </section>
      <section>
        <Heading type="h3">
          <img src="/svg/about/romanceArrows.svg" alt={getTranslation('brandValuesThirdHeadingImgAlt')} />
          {getTranslation('brandValuesThirdHeading')}
        </Heading>
        <Paragraph type="body1">
          {getTranslation('brandValuesThirdParagraph1')} <br />
          <br />
          {getTranslation('brandValuesThirdParagraph2')}
        </Paragraph>
      </section>
      <section>
        <Heading type="h3">
          <img src="/svg/about/tryzub.svg" alt={getTranslation('brandValuesFourthHeadingImgAlt')} />
          {getTranslation('brandValuesFourthHeading')}
        </Heading>
        <Paragraph type="body1">
          {getTranslation('brandValuesFourthParagraph1')} <br />
          <br />
          {getTranslation('brandValuesFourthParagraph2')}
        </Paragraph>
      </section>
    </div>
  );
};
export default BrandValues;
