import { Link } from 'react-router-dom';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const Navigation = () => {
  const { getTranslation } = useTranslationNamespace('header');
  return (
    <nav>
      <ul>
        <li>
          <Link to="catalog">{getTranslation('catalog')}</Link>
        </li>
        <li>
          <Link to="about">{getTranslation('about')}</Link>
        </li>
        <li>
          <Link to="blog">{getTranslation('blog')}</Link>
        </li>
        <li>
          <Link to="cooperation">{getTranslation('cooperation')}</Link>
        </li>
        <li>
          <Link to="contact">{getTranslation('contact')}</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
