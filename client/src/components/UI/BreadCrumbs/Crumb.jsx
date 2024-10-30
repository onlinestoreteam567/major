import { Link } from 'react-router-dom';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import separator from '@assets/svg/breadCrumbs/separator.svg';
import cl from './index.module.scss';

const Crumb = ({ path, name }) => {
  const { getTranslation } = useTranslationNamespace('common');
  return (
    <>
      <span className={cl.separator}>
        <img src={separator} alt={getTranslation('img alt')} />
      </span>
      <li>
        <Link to={path}>{getTranslation(name)}</Link>
      </li>
    </>
  );
};

export default Crumb;
