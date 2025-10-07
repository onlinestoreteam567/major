import { Link } from 'react-router-dom';
import cl from './index.module.scss';
import Header from '@components/Header/Header';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import { Helmet } from 'react-helmet-async';

export default function ErrorPage() {
  const { getTranslation } = useTranslationNamespace('errorPage');

  return (
    <>
      <Helmet>
        <title>{getTranslation('errorText')}</title>
        <meta name="description" content={getTranslation('metaDescription')} />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://major-gamma.vercel.app/" />
      </Helmet>
      <Header scrolled={true} />

      <div className={cl.wrap}>
        <img src="/images/404/404-background.webp" alt={getTranslation('imgAltBg')} />

        <div>
          <p>{getTranslation('errorText')}</p>
          <Link to="/" className={cl.button}>
            {getTranslation('button')}
          </Link>
        </div>
      </div>
    </>
  );
}
