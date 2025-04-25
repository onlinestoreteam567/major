import cl from './index.module.scss';
import TopLink from '@components/UI/TopLink/TopLink';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EmptyPage from '@components/helpers/EmptyPage';
import ProductSet from './Sliders/ProductSet';
import BestSellers from '@pages/HomePage/MainSliders/BestSellers';
import FitCategory from './Sliders/FitCategory';
import Spinner from '@components/helpers/Spinner/Spinner';
import { clearFitCategory } from '@redux/products/fitCategorySlice';
import { getProductById } from '@redux/products/service';
import { loadProductId, selectProductId } from '@redux/selectors';
import useIdFromUrl from '@hooks/useId';
import { useTranslation } from 'react-i18next';
import Card from './Card/Card';

export default function ProductPage() {
  const dispatch = useDispatch();
  const id = useIdFromUrl();
  const { i18n } = useTranslation();

  useEffect(() => {
    dispatch(getProductById(id));
    dispatch(clearFitCategory());
  }, [dispatch, id, i18n.language]);

  const isLoading = useSelector(loadProductId);
  const card = useSelector(selectProductId);

  const categoryId = card.purpose_category || null;

  const isObject = typeof card === 'object' && Object.keys(card).length > 0;
  return (
    <div className={cl.cardPage}>
      <div className={cl.topCase}>
        <TopLink card={card} />
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            {isObject ? <Card card={card} /> : <EmptyPage message="Нічого не знайдено" />}

            {isObject && <FitCategory categoryId={categoryId} />}
          </>
        )}
      </div>

      <BestSellers />
      <ProductSet />
    </div>
  );
}
