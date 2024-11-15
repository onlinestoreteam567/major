import cl from './index.module.scss';
import Heading from '@components/UI/Heading/Heading';
import Paragraph from '@components/UI/Paragraph/Paragraph';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Button from '@UI/Button/Button';

const MajorInfo = () => {
  const { getTranslation } = useTranslationNamespace('majorInfo');

  return (
    <section className={cl.majorInfoWrapper}>
      <Heading type="h2">{getTranslation('title')}</Heading>

      <figure>
        <img src="/images/majorInfo/1.png" alt={getTranslation('imgAlt')} />

        <figcaption>
          <Paragraph>{getTranslation('text1')}</Paragraph>
          <Paragraph>{getTranslation('text2')}</Paragraph>
          <Paragraph>{getTranslation('text3')}</Paragraph>

          <div>
            <Button variant="link" purpose="fitContent">
              {getTranslation('more')}
            </Button>
          </div>
        </figcaption>
      </figure>
    </section>
  );
};
export default MajorInfo;
