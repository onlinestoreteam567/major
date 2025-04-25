import cl from './index.module.scss';
import Heading from '@components/UI/Texts/Heading/Heading';
import SliderBoxMain from '@components/UI/Sliders/SliderBoxMain';
import Spinner from '@components/helpers/Spinner/Spinner';
import EmptyPage from '@components/helpers/EmptyPage';
import { useEffect } from 'react';
import { getFitCategory } from '../../../redux/products/service';
import { useDispatch, useSelector } from 'react-redux';
import { loadFitCategory, selectFitCategory } from '../../../redux/selectors';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

export default function FitCategory({ categoryId }) {
  const id = categoryId[0];
  const dispatch = useDispatch();
  const isLoading = useSelector(loadFitCategory);
  const items = useSelector(selectFitCategory);

  useEffect(() => {
    dispatch(getFitCategory(id));
  }, [dispatch, id]);

  const slidesData = items.reduce((acc, el) => {
    if (el.purpose_category[0] === id) acc.push(el);
    return acc;
  }, []);
  const total = slidesData.length;
  const showArr = Array.isArray(slidesData) && slidesData.length !== 0;

  const { getTranslation } = useTranslationNamespace('common');

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={cl.slider}>
          <Heading type="h2">{getTranslation('youMayBeInterestedIn')}</Heading>
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
