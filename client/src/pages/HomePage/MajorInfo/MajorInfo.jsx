import cl from './index.module.scss';
import Heading from '@UI/Texts/Heading/Heading';
import Paragraph from '@UI/Texts/Paragraph/Paragraph';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import { Link } from 'react-router-dom';

const MajorInfo = () => {
  const { getTranslation } = useTranslationNamespace('majorInfo');

  // Define the image paths
  const desktopImagePath = '/images/majorInfo/majorInfo.webp';
  const mobileImagePath = '/images/majorInfo/majorInfoMobile.webp';

  return (
    <section className={cl.majorInfoWrapper}>
      <Heading type="h2">{getTranslation('title')}</Heading>
      <div className={cl.wrapItem}>
        <div className={cl.wrapImg}>
          {/* Use <picture> for responsive image loading.
            The browser checks <source> elements first:
            1. If the screen is 1024px or wider (min-width: 1024px), it uses desktopImagePath.
            2. Otherwise, it falls back to the <img> tag, which uses mobileImagePath.
            
            Note: The original image path was "/images/majorInfo/1.webp",
            but the prompt requested a change to "majorInfo.webp" and "majorInfoMobile.webp".
          */}
          <picture>
            <source srcSet={desktopImagePath} media="(min-width: 1024px)" />
            <img src={mobileImagePath} alt={getTranslation('imgAlt')} />
          </picture>
        </div>
        <div className={cl.wrapInfo}>
          <div className={cl.wrapText}>
            <Paragraph>{getTranslation('text1')}</Paragraph>
            <Paragraph>{getTranslation('text2')}</Paragraph>
            <Paragraph>{getTranslation('text3')}</Paragraph>
          </div>
          <Link to="/about" className={cl.link} aria-label={getTranslation('ariaLabelMore')}>
            {getTranslation('more')}
          </Link>
        </div>
      </div>
    </section>
  );
};
export default MajorInfo;
