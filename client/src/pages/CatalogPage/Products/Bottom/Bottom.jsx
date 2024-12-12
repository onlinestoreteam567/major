import Button from '@UI/Button/Button';
import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const Bottom = () => {
  const { getTranslation } = useTranslationNamespace('catalogPage');

  return (
    <section className={cl.bottom}>
      <p>{getTranslation('showing')}</p>
      <Button variant="secondary">{getTranslation('loadMore')}</Button>
    </section>
  );
};
export default Bottom;
