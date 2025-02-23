import cl from './index.module.scss';
import CardMobile from './CardMobile';
import CardDesk from './CardDesk';
import TopLink from '@components/UI/TopLink/TopLink';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import EmptyPage from '@components/helpers/EmptyPage';
import ProductSet from './ProductSet';
import BestSellers from '@pages/HomePage/MainSliders/BestSellers';
import FitCategory from './FitCategory';
import Spinner from '@components/helpers/Spinner';
import { clearFitCategory } from '@redux/products/fitCategorySlice';
import { getProductById } from '@redux/products/service';
import { loadProductId, selectProductId } from '@redux/selectors';

export default function ProductPage() {
  const dispatch = useDispatch();

  const location = useLocation();
  const id = location.pathname.split('/').pop();

  useEffect(() => {
    dispatch(getProductById(id));
    dispatch(clearFitCategory());
  }, [dispatch, id]);

  const isLoading = useSelector(loadProductId);
  const card = useSelector(selectProductId);

  const categoryId = card.purpose_category || null;

  const isObject = typeof card === 'object' && Object.keys(card).length > 0;
  return (
    <section className={cl.cardPage}>
      <div className={cl.topCase}>
        <TopLink card={card} />
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <div className={cl.wrapMobile}>
              {isObject ? <CardMobile card={card} /> : <EmptyPage message="Нічого не знайдено" />}
            </div>
            <div className={cl.wrapDesk}>
              {isObject ? <CardDesk card={card} /> : <EmptyPage message="Нічого не знайдено" />}
            </div>
            {isObject && <FitCategory categoryId={categoryId} />}
          </>
        )}
      </div>

      <BestSellers />
      <ProductSet />
    </section>
  );
}
