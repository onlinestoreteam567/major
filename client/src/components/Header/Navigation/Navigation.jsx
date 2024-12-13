import useTranslationNamespace from '@hooks/useTranslationNamespace';
import cl from './index.module.scss';
import { NavLink } from 'react-router-dom';

const links = [
  {
    text: 'catalog',
  },
  {
    text: 'about',
  },
  {
    text: 'blog',
  },
  {
    text: 'cooperation',
  },
  {
    text: 'contact',
  },
];

const Navigation = () => {
  const { getTranslation } = useTranslationNamespace('header');
  return (
    <nav className={cl.headerNavigation}>
      {links.map(({ path, text }) => (
        <NavLink key={path} to={`/${text}`} className={({ isActive }) => (isActive ? cl.activeLink : '')}>
          {getTranslation(text)}
        </NavLink>
      ))}
    </nav>
  );
};
export default Navigation;
