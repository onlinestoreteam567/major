import { Link } from 'react-router-dom';
import cl from './index.module.scss';
import Header from '@components/Header/Header';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

export default function NotFound() {
  const { getTranslation } = useTranslationNamespace('notFound');

  return (
    <>
      <Header scrolled={true} />

      <div className={cl.wrap}>
        <img src="/images/404/404-background.webp" alt={getTranslation('imgAltBg')} className={cl.backgroundImage} />
        <div className={cl.contentWrap}>
          <img src="/images/404/404-label.webp" alt={getTranslation('imgAltLabel')} className={cl.overlayImage} />
          <div className={cl.content}>
            <p className={cl.text}>{getTranslation('text')}</p>
            <Link to="/" className={cl.button}>
              {getTranslation('button')}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
