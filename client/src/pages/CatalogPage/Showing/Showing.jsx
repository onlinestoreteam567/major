import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const Showing = ({ numberFromBackend }) => {
  const { getTranslation } = useTranslationNamespace('catalogPage');
  return (
    <p className={cl.showing}>
      {getTranslation('showingFirst')} {numberFromBackend} {getTranslation('showingSecond')} {numberFromBackend}
    </p>
  );
};
export default Showing;
