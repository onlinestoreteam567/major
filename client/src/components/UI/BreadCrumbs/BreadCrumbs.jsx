import { useBreadcrumbs } from '@hooks/useBreadcrumb';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Crumb from './Crumb';
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
        {crumbs.map(({ path, name }, index) => (
          <Crumb path={path} name={name} key={index} />
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
