import cl from './index.module.scss';
import photo from '@assets/png/majorInfo/1.png';
import H2 from '@components/UI/Hs/H2/H2';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Button from '@UI/Button/Button';

const MajorInfo = () => {
  const { getTranslation } = useTranslationNamespace('majorInfo');

  return (
    <section className={cl.majorInfoWrapper}>
      <H2>{getTranslation('title')}</H2>

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
