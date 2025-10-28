import cl from './index.module.scss';
import TopLink from '@components/UI/TopLink/TopLink';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductSet from './Sliders/ProductSet';
import FitCategory from './Sliders/FitCategory';
import Spinner from '@UI/Spinner/Spinner';
import { clearFitCategory } from '@redux/products/fitCategorySlice';
import { getProductById } from '@redux/products/service';
import { errorProductId, loadProductId, selectProductId } from '@redux/selectors';
import useIdFromUrl from '@hooks/useIdFromUrl';
import { useTranslation } from 'react-i18next';
import { addViewedProduct } from '@redux/products/viewedProductsSlice';
import ProductLook from './Sliders/ProductLook';
import ProductPageCard from './ProductPageCard/ProductPageCard';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

export default function ProductPage() {
  const { getTranslation } = useTranslationNamespace('card');
  const dispatch = useDispatch();
  const id = useIdFromUrl();
  const { i18n } = useTranslation();
  const isLoading = useSelector(loadProductId);
  const card = useSelector(selectProductId);
  const navigate = useNavigate();
  const error = useSelector(errorProductId);

  const isObject = typeof card === 'object' && Object.keys(card).length > 0;

  useEffect(() => {
    dispatch(getProductById(id));
    dispatch(clearFitCategory());
    dispatch(addViewedProduct(id));
  }, [dispatch, id, i18n.language]);

  useEffect(() => {
    if (error) {
      navigate('/404');
    }
  }, [location]);

  const categoryId = card.purpose_category || null;

  const metaTitle = card?.name ? `${card.name} ${getTranslation('metaTitle')}` : getTranslation('metaTitleFallback');
  const metaDescription = getTranslation('metaDescription1') + card.name + getTranslation('metaDescription2');
  return (
    <div className={cl.cardPage}>
      {isObject && (
        <Helmet>
          <title>{metaTitle}</title>
          <meta name="description" content={metaDescription} />
        </Helmet>
      )}

      <div className={cl.topCase}>
        <TopLink card={card} />

        {isLoading ? (
          <Spinner />
        ) : (
          <>
            {isObject && <ProductPageCard card={card} />}
            {isObject && <FitCategory categoryId={categoryId} />}
          </>
        )}
      </div>

      <ProductLook />
      <ProductSet />
    </div>
  );
}
