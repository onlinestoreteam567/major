import { Link } from 'react-router-dom';
import cl from './index.module.scss';
import Header from '@components/Header/Header';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

export default function ErrorPage() {
  const { getTranslation } = useTranslationNamespace('errorPage');

  return (
    <>
      <Header />

      <div className={cl.wrap}>
        <img src="/images/404/404-background.webp" alt={getTranslation('imgAltBg')} className={cl.backgroundImage} />

        <div className={cl.content}>
          <p className={cl.text}>{getTranslation('errorText')}</p>
          <Link to="/" className={cl.button}>
            {getTranslation('button')}
          </Link>
        </div>
      </div>
    </>
  );
}
