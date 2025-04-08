import cl from './index.module.scss';
import Heading from '@UI/Texts/Heading/Heading';
import Paragraph from '@UI/Texts/Paragraph/Paragraph';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import { Link } from 'react-router-dom';

const MajorInfo = () => {
  const { getTranslation } = useTranslationNamespace('majorInfo');

  return (
    <section className={cl.majorInfoWrapper}>
      <Heading type="h2">{getTranslation('title')}</Heading>
      <div className={cl.wrapItem}>
        <div className={cl.wrapImg}>
          <img src="/images/majorInfo/1.webp" alt={getTranslation('imgAlt')} />
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
