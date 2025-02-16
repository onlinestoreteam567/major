import cl from './index.module.scss';
// import CardMobile from './CardMobile';
// import CardDesk from './CardDesk';
// import Description from '@components/UI/CardProduct/Descript/Description';
// import ListReviewsCard from '@components/UI/UserReviews/ListReviewsCard';
// import TopLink from '@components/UI/TopLink/TopLink';
// import ProductOffer from './ProductOffer';
// import ProductSet from './ProductSet';
// import ProductLook from './ProductLook';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
// import { fetchProduct } from '@../servicesold/productService';
import { getProductById } from '../../redax/products/service';
import { loadProductId, selectProductId } from '../../redax/selectors';
import Loading from '@components/helpers/Loading';
// import { selectError, selectLoading, selectProduct } from '../../redax/selectors';
// import Loading from '@components/UI/Overlay/Loading';

export default function ProductPage() {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  // const { card, status } = useSelector((state) => state.product);
  const location = useLocation();
  const id = location.pathname.split('/').pop();
  console.log(id);

  // const isLoading = useSelector(selectLoading);
  // const product = useSelector(selectProduct);
  // const errors = useSelector(selectError);

  useEffect(() => {
    // if (!id) return;
    console.log('HELLO');
    dispatch(getProductById(id));
  }, [dispatch, i18n.language, id]);

  const isLoading = useSelector(loadProductId);
  const card = useSelector(selectProductId);
  console.log(card);

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
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h4>HELLO</h4>
          {/* <div className={cl.topCase}>
            <TopLink card={card} />
            <div className={cl.wrapMobile}>
              <CardMobile card={card} />
            </div>
            <div className={cl.wrapDesk}>
              <CardDesk card={card} />
            </div>
          </div>
          <Description card={card} />
          <ListReviewsCard card={card} /> */}
          {/* <ProductOffer card={card} /> */}

          {/* <ProductSet card={card} /> */}
          {/* <ProductLook /> */}
        </>
      )}
      {/* {errors && <p>NOT FOUND</p>} */}
    </section>
  );
}
