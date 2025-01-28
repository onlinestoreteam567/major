import cl from './index.module.scss';
import CardMobile from './CardMobile';
import CardDesk from './CardDesk';
import Description from '@components/UI/CardProduct/Descript/Description';
import ListReviewsCard from '@components/UI/UserReviews/ListReviewsCard';
import TopLink from '@components/UI/TopLink/TopLink';
import ProductOffer from './ProductOffer';
import ProductSet from './ProductSet';
import ProductLook from './ProductLook';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { fetchProduct } from '@features/products/productSlice';
import { useLocation } from 'react-router-dom';

export default function ProductPage() {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const { card, status, error } = useSelector((state) => state.product);
  const location = useLocation();
  const productId = location.pathname.split('/').pop();

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, i18n.language, productId]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <section className={cl.cardPage}>
      {status === 'succeeded' && (
        <>
          {console.log(card)}
          <div className={cl.topCase}>
            <TopLink card={card} />
            <div className={cl.wrapMobile}>
              <CardMobile card={card} />
            </div>
            <div className={cl.wrapDesk}>
              <CardDesk card={card} />
            </div>
          </div>
          <Description card={card} />
          <ListReviewsCard />
          {/* <ProductOffer card={card} /> */}
          {/* <ProductSet card={card} /> */}
          {/* <ProductLook /> */}
        </>
      )}
    </section>
  );
}
