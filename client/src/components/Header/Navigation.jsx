import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <nav>
      <ul>
        <li>{t('catalog', { ns: 'header' })}</li>
        <li>
          <Link to="about">{t('about', { ns: 'header' })}</Link>
        </li>
        <li>
          <Link to="blog">{t('blog', { ns: 'header' })}</Link>
        </li>
        <li>
          <Link to="cooperation">{t('cooperation', { ns: 'header' })}</Link>
        </li>
        <li>
          <Link to="contact">{t('contact', { ns: 'header' })}</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
