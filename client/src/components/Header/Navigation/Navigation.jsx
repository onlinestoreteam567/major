import useTranslationNamespace from '@hooks/useTranslationNamespace';
import cl from './index.module.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTrue } from '@features/catalogPage/catalogPageSlice';

const links = ['catalog', 'about', 'blog', 'cooperation', 'contact'];

const Navigation = ({ onClick }) => {
  const { getTranslation } = useTranslationNamespace('header');

  const dispatch = useDispatch();
  const handleSetTrue = () => dispatch(setTrue());

  return (
    <nav className={cl.headerNavigation}>
      {links.map((text) => (
        <NavLink
          key={text}
          to={`/${text}`}
          className={({ isActive }) => (isActive ? cl.activeLink : '')}
          onClick={() => {
            if (onClick) onClick();

            if (text === 'catalog') {
              handleSetTrue();
            }
          }}
        >
          {getTranslation(text)}
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
