import cl from './index.module.scss';
import CardMobile from './CardMobile';
import CardDesk from './CardDesk';
// import Description from '@components/UI/CardProduct/Descript/Description';
// import ListReviewsCard from '@components/UI/UserReviews/ListReviewsCard';
import TopLink from '@components/UI/TopLink/TopLink';
// import ProductOffer from './ProductOffer';
// import ProductSet from './ProductSet';
// import ProductLook from './ProductLook';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { getProductById } from '../../redax/products/service';
import { loadProductId, selectProductId } from '../../redax/selectors';
import Loading from '@components/helpers/Loading';
import EmptyPage from '@components/helpers/EmptyPage';
import ProductSet from './ProductSet';
import BestSellers from '@pages/HomePage/MainSliders/BestSellers';
// import ProductsByCategory from './ProductsByCategory';

export default function ProductPage() {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();

  const location = useLocation();
  const id = location.pathname.split('/').pop();
  console.log(id);

  useEffect(() => {
    // if (!id) return;

    dispatch(getProductById(id));
  }, [dispatch, i18n.language, id]);

  const isLoading = useSelector(loadProductId);
  const card = useSelector(selectProductId);
  const category = card.purpose_category || null;
  console.log(category);

  console.log(card);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section className={cl.cardPage}>
          <div className={cl.topCase}>
            <TopLink card={card} />
            <div className={cl.wrapMobile}>{card ? <CardMobile card={card} /> : <EmptyPage />}</div>
            <div className={cl.wrapDesk}>{card ? <CardDesk card={card} /> : <EmptyPage />}</div>
          </div>
          {/* <ProductsByCategory category={category} /> */}
          <BestSellers />
          <ProductSet />

          {/* <ProductOffer card={card} /> */}
          {/*  */}
          {/* <ProductLook /> */}
        </section>
      )}
    </>
  );
}
