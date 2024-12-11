import useTranslationNamespace from '@hooks/useTranslationNamespace';
import cl from './index.module.scss';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const { getTranslation } = useTranslationNamespace('header');
  return (
    <nav className={cl.headerNavigation}>
      <NavLink to="/catalog">{getTranslation('catalog')}</NavLink>
      <NavLink to="/about">{getTranslation('about')}</NavLink>
      <NavLink to="/blog">{getTranslation('blog')}</NavLink>
      <NavLink to="/cooperation">{getTranslation('cooperation')}</NavLink>
      <NavLink to="/contact">{getTranslation('contact')}</NavLink>
    </nav>
  );
};
export default Navigation;
