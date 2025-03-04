import cl from './index.module.scss';
import { Link } from 'react-router-dom';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const NotFound = () => {
  const { getTranslation } = useTranslationNamespace('search');

  return (
    <section className={cl.searchNotFound}>
      <p>{getTranslation('notFound1')}</p>
      <Link to="catalog">{getTranslation('goToCatalog')}</Link>
    </section>
  );
};
export default NotFound;
