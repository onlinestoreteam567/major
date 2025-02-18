import SliderBoxMain from '@components/UI/Sliders/SliderBoxMain';
import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import { useSelector } from 'react-redux';
import { loadSets, selectSets } from '../../redax/selectors';
import Spinner from '@components/helpers/Spinner';

export default function ProductSet() {
  const isLoading = useSelector(loadSets);
  const sets = useSelector(selectSets);

  return (
    <div className={cl.wrapProductOffer}>
      <Heading type="h2">Разом дешевше</Heading>
      {isLoading ? <Spinner /> : <SliderBoxMain slidesData={sets} />}
    </div>
  );
}
