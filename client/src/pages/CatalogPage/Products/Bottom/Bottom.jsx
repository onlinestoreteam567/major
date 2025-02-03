import Button from '@UI/Button/Button';
import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Showing from '@pages/CatalogPage/Showing/Showing';

// Will be get from backend
const numberFromBackend = 0;

const Bottom = () => {
  const { getTranslation } = useTranslationNamespace('catalogPage');

  return (
    <section className={cl.bottom}>
      <Showing numberFromBackend={numberFromBackend} />
      <Button variant="secondary">{getTranslation('loadMore')}</Button>
    </section>
  );
};
export default Bottom;
