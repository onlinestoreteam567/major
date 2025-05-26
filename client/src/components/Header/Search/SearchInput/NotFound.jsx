import cl from './index.module.scss';
import { Link } from 'react-router-dom';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const NotFound = ({handleCloseInput}) => {
  const { getTranslation } = useTranslationNamespace('search');

  const handleClick = () => {
    if (handleCloseInput) handleCloseInput();
  };

  return (
    <section className={cl.searchNotFound}>
      <p>{getTranslation('notFound')}</p>
      <Link to="catalog" onClick={handleClick}>{getTranslation('goToCatalog')}</Link>
    </section>
  );
};
export default NotFound;
