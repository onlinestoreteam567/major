import SliderBoxMain from '@components/UI/Sliders/SliderBoxMain';
import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import { useSelector } from 'react-redux';
import { selectSets } from '../../redax/selectors';

export default function ProductSet() {
  const sets = useSelector(selectSets);

  return (
    <div className={cl.wrapProductOffer}>
      <Heading type="h2">Разом дешевше</Heading>
      <SliderBoxMain slidesData={sets} />
    </div>
  );
}
