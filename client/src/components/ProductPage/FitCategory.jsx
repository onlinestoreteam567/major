import cl from './index.module.scss';
import Heading from '@components/UI/Texts/Heading/Heading';
import SliderBoxMain from '@components/UI/Sliders/SliderBoxMain';
import Spinner from '@components/helpers/Spinner';
import EmptyPage from '@components/helpers/EmptyPage';
import { useEffect } from 'react';
import { fetchProductsAll } from '../../redux/products/service';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts, selectProducts } from '../../redux/selectors';

export default function FitCategory({ categoryId }) {
  const id = categoryId[0];
  const dispatch = useDispatch();
  useEffect(() => {
    if (!id) return;
    dispatch(fetchProductsAll());
  }, [dispatch, id]);

  const isLoading = useSelector(loadProducts);
  const items = useSelector(selectProducts);

  const slidesData = items.reduce((acc, el) => {
    if (el.purpose_category[0] === id) acc.push(el);
    return acc;
  }, []);
  const total = slidesData.length;

  const showArr = Array.isArray(slidesData) && slidesData.length !== 0;

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={cl.wrapProductOffer}>
          <Heading type="h2">Вас можуть зацікавити</Heading>
          {showArr ? (
            <SliderBoxMain total={total} slidesData={slidesData} />
          ) : (
            <EmptyPage message="Нічого не знайдено" />
          )}
        </div>
      )}
    </>
  );
}
