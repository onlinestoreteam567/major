import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import separator from '@assets/svg/breadCrumbs/separator.svg';
import cl from './index.module.scss';

const Crumb = ({ path, name }) => {
  const { t } = useTranslation();
  return (
    <>
      <span className={cl.separator}>
        <img src={separator} alt={t('img alt', { ns: 'breadCrumbs' })} />
      </span>
      <li>
        <Link to={path}>{t(name, { ns: 'breadCrumbs' })}</Link>
      </li>
    </>
  );
};

export default Crumb;
