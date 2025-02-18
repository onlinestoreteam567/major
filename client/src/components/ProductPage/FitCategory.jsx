import cl from './index.module.scss';
import Heading from '@components/UI/Texts/Heading/Heading';
import SliderBoxMain from '@components/UI/Sliders/SliderBoxMain';
import Spinner from '@components/helpers/Spinner';
import EmptyPage from '@components/helpers/EmptyPage';
import { useEffect } from 'react';
import { getFitCategory } from '../../redux/products/service';
import { useDispatch, useSelector } from 'react-redux';
import { loadFitCategory, selectFitCategory } from '../../redux/selectors';

export default function FitCategory({ categoryId }) {
  const id = categoryId[0];
  const dispatch = useDispatch();
  useEffect(() => {
    if (!id) return;

    dispatch(getFitCategory(id));
  }, [dispatch, id]);

  const isLoading = useSelector(loadFitCategory);
  const items = useSelector(selectFitCategory);

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
          {console.log(showArr)}
          {showArr ? (
            <>
              {console.log({ slidesData })}
              <SliderBoxMain total={total} slidesData={slidesData} />
            </>
          ) : (
            <>
              {console.log('empty')}
              <EmptyPage message="Нічого не знайдено" />
            </>
          )}
        </div>
      )}
    </>
  );
}
