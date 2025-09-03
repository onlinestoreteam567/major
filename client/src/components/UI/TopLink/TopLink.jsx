import ArrowLink from '@components/UI/icons/ArrowLink/ArrowLink';
import cl from './index.module.scss';
import { NavLink, useLocation } from 'react-router-dom';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

export default function TopLink({ card }) {
  let { pathname } = useLocation();
  const segments = pathname.split('/');
  const page = segments[1];
  const { getTranslation } = useTranslationNamespace('common');
  return (
    <nav className={cl.wrapLinkBack}>
      <div className={cl.wrapLink}>
        <NavLink to="/" className={cl.link}>
          {getTranslation('home')}
        </NavLink>
      </div>
      <div className={cl.wrapLink}>
        <ArrowLink />
        <NavLink to={`/${page}`} className={cl.link}>
          {getTranslation(page)}
        </NavLink>
      </div>
      {card ? (
        <div className={cl.wrapLink}>
          <ArrowLink />
          <NavLink to={`${pathname}`} className={cl.link}>
            {card.name}
          </NavLink>
        </div>
      ) : null}
    </nav>
  );
}
