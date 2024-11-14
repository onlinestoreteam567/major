import cl from './index.module.scss';
import photo from '@assets/png/majorInfo/1.png';
import Heading from '@components/UI/Heading/Heading';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Button from '@UI/Button/Button';

const MajorInfo = () => {
  const { getTranslation } = useTranslationNamespace('majorInfo');

  return (
    <section className={cl.majorInfoWrapper}>
      <Heading type="h2">{getTranslation('title')}</Heading>

      <figure>
        <img src={photo} alt={getTranslation('imgAlt')} />

        <figcaption>
          <p>{getTranslation('text1')}</p>
          <p>{getTranslation('text2')}</p>
          <p>{getTranslation('text3')}</p>

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
