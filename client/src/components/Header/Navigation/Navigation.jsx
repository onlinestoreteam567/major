import useTranslationNamespace from '@hooks/useTranslationNamespace';
import cl from './index.module.scss';
import { NavLink } from 'react-router-dom';

const links = ['catalog', 'about', 'blog', 'cooperation', 'contact'];

const Navigation = ({ onClick }) => {
  const { getTranslation } = useTranslationNamespace('header');

  return (
    <nav className={cl.headerNavigation}>
      {links.map((text) => (
        <NavLink
          key={text}
          to={`/${text}`}
          className={({ isActive }) => (isActive ? cl.activeLink : '')}
          onClick={onClick}
        >
          {getTranslation(text)}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
