import { useBreadcrumbs } from '@hooks/useBreadcrumb';
import { Link } from 'react-router-dom';
import Crumb from './Crumb';
import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const BreadCrumbs = () => {
  const crumbs = useBreadcrumbs();
  const { getTranslation } = useTranslationNamespace('common');

  return (
    <nav aria-label="breadcrumb" className={cl.breadCrumbNav}>
      <ol>
        <li>
          <Link to="/">{getTranslation('home')}</Link>
        </li>
        {crumbs.map(({ path, name }, index) => (
          <Crumb path={path} name={name} key={index} />
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
