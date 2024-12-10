import Button from '@UI/Button/Button';
import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const Bottom = () => {
  const { getTranslation } = useTranslationNamespace('catalogPage');

  return (
    <section className={cl.bottom}>
      <p>{getTranslation('showing')}</p>
      <div className={cl.buttonWrapper}>
        <Button variant="secondary">{getTranslation('loadMore')}</Button>
      </div>
    </section>
  );
};
export default Bottom;
