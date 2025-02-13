import cl from './index.module.scss';
import Heading from '@UI/Texts/Heading/Heading';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import SliderBoxMain from '@components/UI/Sliders/SliderBoxMain';
import { useSelector } from 'react-redux';

const Sets = () => {
  const { items, status, error } = useSelector((state) => state.sets);
  const { getTranslation } = useTranslationNamespace('common');

  if (status === 'loading') {
    return <div style={{ color: 'black', fontSize: '50px' }}>Завантаження разом дешевше... </div>;
  }

  if (status === 'failed') {
    return <div style={{ color: 'black', fontSize: '50px' }}>Error: {error}</div>;
  }

  return (
    <section className={cl.wrapSliders}>
      <Heading type="h2">{getTranslation('cheaperTogether')}</Heading>
      <SliderBoxMain slidesData={items} />
    </section>
  );
};

export default Sets;
