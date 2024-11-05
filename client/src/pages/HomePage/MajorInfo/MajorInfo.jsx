import cl from './index.module.scss';
import photo from '@assets/png/majorInfo/1.png';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Button from '../../../components/UI/Button/Button';

const MajorInfo = () => {
  const { getTranslation } = useTranslationNamespace('majorInfo');

  return (
    <section className={cl.majorInfoWrapper}>
      <h2>{getTranslation('title')}</h2>

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
