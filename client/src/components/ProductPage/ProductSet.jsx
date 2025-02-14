import SliderBoxMain from '@components/UI/Sliders/SliderBoxMain';
import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import { useSelector } from 'react-redux';

export default function ProductSet() {
  const { items, status, error } = useSelector((state) => state.sets);

  if (status === 'loading') {
    return <div style={{ color: 'black', fontSize: '50px' }}>Завантаження разом дешевше... </div>;
  }

  if (status === 'failed') {
    return <div style={{ color: 'black', fontSize: '50px' }}>Error: {error}</div>;
  }

  return (
    <div className={cl.wrapProductOffer}>
      <Heading type="h2">Разом дешевше</Heading>
      <SliderBoxMain slidesData={items} />
    </div>
  );
}
