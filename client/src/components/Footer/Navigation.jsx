import cl from './index.module.scss';
import { Link } from 'react-router-dom';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const Navigation = () => {
  const { getTranslation } = useTranslationNamespace('footer');
  return (
    <>
      <section className={cl.firstNavigationSection}>
        <ul className={cl.ulNavigation}>
          <li className={cl.textToRight}>
            <Link to="/">{getTranslation('main')}</Link>
          </li>
          <li className={cl.textToRight}>
            <Link to="catalog">{getTranslation('catalog')}</Link>
          </li>
          <li className={cl.textToRight}>
            <Link to="/about">{getTranslation('about')}</Link>
          </li>
          <li className={cl.textToRight}>
            <Link to="blog">{getTranslation('blog')}</Link>
          </li>
        </ul>
      </section>
      <section>
        <ul className={cl.ulNavigation}>
          <li>
            <Link to="cooperation">{getTranslation('cooperation')}</Link>
          </li>
          <li>
            <a href="">{getTranslation('publicOffer')}</a>
          </li>
          <li>
            <a href="">{getTranslation('exchangeAndReturn')}</a>
          </li>
          <li>
            <a href="">{getTranslation('paymentAndDelivery')}</a>
          </li>
        </ul>
      </section>
    </>
  );
};
export default Navigation;
