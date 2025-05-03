import SliderBoxMain from '@components/UI/Sliders/SliderBoxMain';
import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import { useSelector } from 'react-redux';
import Spinner from '@components/helpers/Spinner/Spinner';
import { loadSets, selectSets } from '@redux/selectors';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

export default function ProductSet() {
  const isLoading = useSelector(loadSets);
  const sets = useSelector(selectSets);
  const { getTranslation } = useTranslationNamespace('common');

  return (
    <div className={cl.slider}>
      <Heading type="h3">{getTranslation('cheaperTogether')}</Heading>
      {isLoading ? <Spinner /> : <SliderBoxMain slidesData={sets} />}
    </div>
  );
}
