import React from 'react';
import { useBreadcrumbs } from '@hooks/useBreadcrumb';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import separator from '@assets/svg/breadCrumbs/separator.svg';
import cl from './index.module.scss';

const BreadCrumbs = () => {
  const { t } = useTranslation();
  const crumbs = useBreadcrumbs();

  return (
    <nav aria-label="breadcrumb" className={cl.breadCrumbNav}>
      <ol>
        <li>
          <Link to="/">{t('home', { ns: 'breadCrumbs' })}</Link>
        </li>
        {crumbs.map((crumb, index) => (
          <React.Fragment key={index}>
            <span className={cl.separator}>
              <img src={separator} alt={t('img alt', { ns: 'breadCrumbs' })} />
            </span>
            <li>
              <Link to={crumb.path}>{t(crumb.name, { ns: 'breadCrumbs' })}</Link>
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};
export default BreadCrumbs;
