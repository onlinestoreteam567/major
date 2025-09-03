import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';
import { Link } from 'react-router-dom';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const YourTimeIsPriceless = () => {
  const { getTranslation } = useTranslationNamespace('aboutPage');

  return (
    <section className={cl.yourTimeIsPriceless}>
      <Heading type="h2">{getTranslation('yourTimeIsPricelessTitle')}</Heading>
      <img src="/images/about/yourTimeIsPriceless.webp" alt={getTranslation('yourTimeIsPricelessImgAlt')} />
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
