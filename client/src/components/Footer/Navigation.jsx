import cl from './index.module.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className={cl.firstNavigationSection}>
        <ul className={cl.ulNavigation}>
          <li className={cl.textToRight}>
            <Link to="/">{t('main', { ns: 'footer' })}</Link>
          </li>
          <li className={cl.textToRight}>
            <Link to="catalog">{t('catalog', { ns: 'footer' })}</Link>
          </li>
          <li className={cl.textToRight}>
            <Link to="/about">{t('about', { ns: 'footer' })}</Link>
          </li>
          <li className={cl.textToRight}>
            <Link to="blog">{t('blog', { ns: 'footer' })}</Link>
          </li>
        </ul>
      </section>
      <section>
        <ul className={cl.ulNavigation}>
          <li>
            <Link to="cooperation">{t('cooperation', { ns: 'footer' })}</Link>
          </li>
          <li>
            <a href="">{t('public offer', { ns: 'footer' })}</a>
          </li>
          <li>
            <a href="">{t('exchange and return', { ns: 'footer' })}</a>
          </li>
          <li>
            <a href="">{t('payment and delivery', { ns: 'footer' })}</a>
          </li>
        </ul>
      </section>
    </>
  );
};
export default Navigation;
