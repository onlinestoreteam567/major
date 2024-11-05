import cl from './index.module.scss';
import photo from '@assets/png/majorInfo/1.png';
import { useTranslation } from 'react-i18next';
import Button from '../Button/Button';

const MajorInfo = () => {
  const { t } = useTranslation();

  return (
    <section className={cl.majorInfoWrapper}>
      <h2>{t('title', { ns: 'majorInfo' })}</h2>

      <figure>
        <img src={photo} alt={t('imgAlt', { ns: 'majorInfo' })} />

        <figcaption>
          <p>{t('text1', { ns: 'majorInfo' })}</p>
          <p>{t('text2', { ns: 'majorInfo' })}</p>
          <p>{t('text3', { ns: 'majorInfo' })}</p>

          <div>
            <Button variant="link" purpose="fitContent">
              {t('more', { ns: 'majorInfo' })}
            </Button>
          </div>
        </figcaption>
      </figure>
    </section>
  );
};
export default MajorInfo;
