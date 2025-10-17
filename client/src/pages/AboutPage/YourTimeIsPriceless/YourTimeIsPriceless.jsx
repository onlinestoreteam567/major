import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import { Link } from 'react-router-dom';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const YourTimeIsPriceless = () => {
  const { getTranslation } = useTranslationNamespace('aboutPage');

  const mobileImagePath = '/images/about/yourTimeIsPricelessMobile.webp';
  const deskminImagePath = '/images/about/yourTimeIsPricelessDeskmin.webp';
  const deskmaxImagePath = '/images/about/yourTimeIsPricelessDeskmax.webp';

  return (
    <section className={cl.yourTimeIsPriceless}>
      <Heading type="h2">{getTranslation('yourTimeIsPricelessTitle')}</Heading>

      <picture>
        <source srcSet={deskmaxImagePath} media="(min-width: 1440px)" />
        <source srcSet={deskminImagePath} media="(min-width: 1024px)" />
        <img src={mobileImagePath} alt={getTranslation('yourTimeIsPricelessImgAlt')} />
      </picture>

      <div>
        <Paragraph type="body1">
          {getTranslation('yourTimeIsPricelessFirstParagraph1')}
          <br />
          {getTranslation('yourTimeIsPricelessFirstParagraph2')}
        </Paragraph>
        <Paragraph type="body1">{getTranslation('yourTimeIsPricelessSecondParagraph')}</Paragraph>
      </div>
      <Link to="/catalog">{getTranslation('toCatalog')}</Link>
    </section>
  );
};
export default YourTimeIsPriceless;
