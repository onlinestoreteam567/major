import SliderBoxMain from '@components/UI/Sliders/SliderBoxMain';
import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import { loadViewedProducts, selectFetchedViewedProducts } from '@redux/selectors';
import { useSelector } from 'react-redux';
import Spinner from '@components/helpers/Spinner/Spinner';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

export default function ProductLook() {
  const isLoading = useSelector(loadViewedProducts);
  const fetchedViewedProducts = useSelector(selectFetchedViewedProducts);
  const { getTranslation } = useTranslationNamespace('common');

  if (!Array.isArray(fetchedViewedProducts) || fetchedViewedProducts.length === 0) return;

  return isLoading ? (
    <Spinner />
  ) : (
    <div className={cl.slider}>
      <Heading type="h2">{getTranslation('youHaveViewed')}</Heading>
      <SliderBoxMain slidesData={fetchedViewedProducts} />
    </div>
  );
}
