import Button from '@UI/Button/Button';
import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import Showing from '@pages/CatalogPage/Showing/Showing';

// Will be get from backend
const numberFromBackend = 0;

const Bottom = () => {
  return (
    <section className={cl.bottom}>
      <Showing numberFromBackend={numberFromBackend} />
    </section>
  );
};
export default Bottom;
