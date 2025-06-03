import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import { loadViewedProducts, selectFetchedViewedProducts, selectViewedProducts } from '@redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '@components/helpers/Spinner/Spinner';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import ProductListOrSlider from '@components/UI/ProductListOrSlider/ProductListOrSlider';
import { useEffect } from 'react';
import { getProductsByViewedProductsIds } from '@redux/products/service';
import { useTranslation } from 'react-i18next';

export default function ProductLook() {
  const { i18n } = useTranslation();

  const dispatch = useDispatch();
  const isLoading = useSelector(loadViewedProducts);
  const fetchedViewedProducts = useSelector(selectFetchedViewedProducts);
  const { getTranslation } = useTranslationNamespace('common');
  const viewedProducts = useSelector(selectViewedProducts);

  useEffect(() => {
    if (viewedProducts.length === 0) return;

    dispatch(getProductsByViewedProductsIds(viewedProducts.map((item) => item)));
  }, [dispatch, viewedProducts, i18n.language]);

  if (!Array.isArray(fetchedViewedProducts) || fetchedViewedProducts.length === 0) return;

  return isLoading ? (
    <Spinner />
  ) : (
    <div className={cl.slider}>
      <Heading type="h3">{getTranslation('youHaveViewed')}</Heading>
      <ProductListOrSlider products={fetchedViewedProducts} />
    </div>
  );
}
