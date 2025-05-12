import cl from './index.module.scss';
import Heading from '@UI/Texts/Heading/Heading';
import SliderBoxMain from '@components/UI/Sliders/SliderBoxMain';
import { useSelector } from 'react-redux';
import EmptyPage from '@components/helpers/EmptyPage';
import { loadBestSeller, selectBestSeller } from '@redux/selectors';
import Spinner from '@components/helpers/Spinner/Spinner';

const BestSellers = () => {
  const isLoading = useSelector(loadBestSeller);
  const items = useSelector(selectBestSeller);
  const total = items.length || 0;

  const showArr = Array.isArray(items) && items.length !== 0;
  return (
    <section className={cl.wrapSliders}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Heading type="h2">Хіти без перекладу</Heading>
          {showArr ? (
            <SliderBoxMain total={total} slidesData={items} />
          ) : (
            <EmptyPage message="Не передбачувана помилка" />
          )}
        </>
      )}
    </section>
  );
};

export default BestSellers;
