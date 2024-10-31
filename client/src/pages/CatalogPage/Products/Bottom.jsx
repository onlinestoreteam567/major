import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const Bottom = () => {
  const { getTranslation } = useTranslationNamespace('catalogPage');

  return (
    <section className={cl.bottom}>
      <p>{getTranslation('showing')}</p>
      <button>{getTranslation('load more')}</button>
    </section>
  );
};
export default Bottom;
