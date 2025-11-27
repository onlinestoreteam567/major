import useTranslationNamespace from '@hooks/useTranslationNamespace';
import cl from './index.module.scss';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchProductsAll } from '@redux/products/service';
import { resetFilter } from '@redux/filter/filterSlice';

const links = ['catalog', 'about', 'cooperation'];

const HeaderNavigation = ({ onClick, scrollToFooter }) => {
  const { getTranslation } = useTranslationNamespace('header');
  const dispatch = useDispatch();

  const handleClearFilters = () => {
    dispatch(fetchProductsAll());
    dispatch(resetFilter());
  };

  return (
    <nav className={cl.headerNavigation}>
      {links.map((text) => {
        const isCatalog = text === 'catalog';
        const clickHandler = isCatalog
          ? () => {
              handleClearFilters();
              if (onClick) onClick();
            }
          : onClick;

        return (
          <NavLink
            key={text}
            to={`/${text}`}
            className={({ isActive }) => (isActive ? cl.activeLink : '')}
            onClick={clickHandler}
            aria-label={getTranslation(`ariaLabel${text}`)}
          >
            {getTranslation(text)}
          </NavLink>
        );
      })}
      <NavLink
        to={'#footer'}
        onClick={() => {
          scrollToFooter();
          onClick();
        }}
        aria-label={getTranslation(`ariaLabel${'contact'}`)}
        className={window.location.hash === '#footer' ? cl.activeLink : ''}
      >
        {getTranslation('contact')}
      </NavLink>
    </nav>
  );
};

export default HeaderNavigation;
