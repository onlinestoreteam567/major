import cl from './index.module.scss';
import card from './card.json';
import CardMobile from './CardMobile';
import CardDesk from './CardDesk';
import Description from '../CardProduct/Descript/Description';
// import ReviewsTitle from '../UserReviews/ReviewsTitle';
import ListReviewsCard from '../UserReviews/ListReviewsCard';
// import BuyTogether from '../BuyTogether/BuyTogether';
// import Heading from '../Texts/Heading/Heading';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';
import ProductOffer from '../CardProduct/ProductOffer/ProductOffer';
// import Offer from '../CardProduct/ProductOffer/Offer';

export default function ProductCardPage() {
  return (
    <section className={cl.cardPage}>
      <div className={cl.topCase}>
        <BreadCrumbs product={card.name} />
        <div className={cl.wrapMobile}>
          <CardMobile card={card} />
        </div>
        <div className={cl.wrapDesk}>
          <CardDesk card={card} />
        </div>
      </div>
      <Description card={card} />
      <ProductOffer card={card} />
      {/* <Offer card={card} /> */}
      <ListReviewsCard />
      {/* <div className={cl.wrapReviews}></div>
      <div className={cl.wrapReviews}></div> */}
    </section>
  );
}
