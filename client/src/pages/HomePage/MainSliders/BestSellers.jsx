import cl from './index.module.scss';
import Heading from '@UI/Texts/Heading/Heading';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import SliderBoxMain from '@components/UI/Sliders/SliderBoxMain';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBestSellers } from '@features/products/bestSellersSlice';
import { useEffect } from 'react';

const BestSellers = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.bestSellers);
  const { getTranslation } = useTranslationNamespace('common');

  useEffect(() => {
    if (status === 'idle' || status === 'failed') {
      dispatch(fetchBestSellers());
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return <div style={{ color: 'black', fontSize: '50px' }}>Завантаження хітів продажу...</div>;
  }

  if (status === 'failed') {
    return <div style={{ color: 'black', fontSize: '50px' }}>Error: {error}</div>;
  }

  return (
    <section className={cl.wrapSliders}>
      <Heading type="h2">{getTranslation('bestSellers')}</Heading>
      <SliderBoxMain slidesData={items} />
    </section>
  );
};

export default BestSellers;
