import cl from './index.module.scss';
import Heading from '@UI/Texts/Heading/Heading';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import SliderBoxMain from '@components/UI/Sliders/SliderBoxMain';
import { useSelector } from 'react-redux';
import { loadBestSeller, selectBestSeller } from '../../../redax/selectors';
import Spinner from '@components/helpers/Spinner';
import EmptyPage from '@components/helpers/EmptyPage';

const BestSellers = () => {
  // const { items, status, error } = useSelector((state) => state.bestSellers);
  const { getTranslation } = useTranslationNamespace('common');
  const isLoading = useSelector(loadBestSeller);
  const items = useSelector(selectBestSeller);
  const total = items.length || 0;

  // const isLoading = useSelector(selectLoading);

  // if (status === 'loading') {
  //   return <div style={{ color: 'black', fontSize: '50px' }}>Завантаження хітів продажу...</div>;
  // }

  // if (status === 'failed') {
  //   return <div style={{ color: 'black', fontSize: '50px' }}>Error: {error}</div>;
  // }
  const showArr = Array.isArray(items) && items.length !== 0;
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <section className={cl.wrapSliders}>
          <Heading type="h2">{getTranslation('bestSellers')}</Heading>
          {showArr ? (
            <SliderBoxMain total={total} slidesData={items} />
          ) : (
            <EmptyPage message="Не передбачувана помилка" />
          )}
        </section>
      )}
    </>
  );
};

export default BestSellers;
