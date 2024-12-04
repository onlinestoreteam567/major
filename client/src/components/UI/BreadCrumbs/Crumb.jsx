import { Link } from 'react-router-dom';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const Crumb = ({ path, name }) => {
  const { getTranslation } = useTranslationNamespace('common');
  return (
    <>
      <span>
        <img src="/svg/breadCrumbs/separator.svg" alt={getTranslation('img alt')} />
      </span>
      <li>
        <Link to={path}>{getTranslation(name)}</Link>
      </li>
    </>
  );
};

export default Crumb;
