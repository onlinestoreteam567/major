import cl from './index.module.scss';
import CardMobile from './CardMobile';
import CardDesk from './CardDesk';
import Description from '@components/UI/CardProduct/Descript/Description';
import ListReviewsCard from '@components/UI/UserReviews/ListReviewsCard';
import TopLink from '@components/UI/TopLink/TopLink';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { fetchProduct } from '@services/productService';
// import { selectError, selectLoading, selectProduct } from '../../redax/selectors';
// import Loading from '@components/UI/Overlay/Loading';

export default function ProductPage() {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const { card, status } = useSelector((state) => state.product);
  const location = useLocation();
  const productId = location.pathname.split('/').pop();

  // const isLoading = useSelector(selectLoading);
  // const product = useSelector(selectProduct);
  // const errors = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [dispatch, i18n, productId]);

  // if (status === 'loading') {
  //   return (
  //     <div style={{ color: 'black', fontSize: '50px', marginTop: '200px', height: '100vh' }}>
  //       Завантаження карточки...
  //     </div>
  //   );
  // }

  // if (status === 'failed') {
  //   return <div style={{ color: 'black', fontSize: '50px' }}>Error: {error}</div>;
  // }

  return (
    <section className={cl.cardPage}>
      {/* {isLoading ? (
        <Loading />
      ) : ( */}
      {status === 'succeeded' && (
        <>
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
          <ListReviewsCard card={card} />
          {/* <ProductOffer card={card} /> */}

          {/* <ProductSet card={card} /> */}
          {/* <ProductLook /> */}
        </>
      )}
      {/* {errors && <p>NOT FOUND</p>} */}
    </section>
  );
}
