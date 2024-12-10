import cl from './index.module.scss';
import card from './card.json';
import CardMobile from './CardMobile';
import CardDesk from './CardDesk';
import Description from '@components/UI/CardProduct/Descript/Description';
import ListReviewsCard from '@components/UI/UserReviews/ListReviewsCard';
import TopLink from '@components/UI/TopLink/TopLink';
import ProductOffer from './ProductOffer';
import ProductSet from './ProductSet';
import ProductLook from './ProductLook';

export default function ProductPage() {
  return (
    <section className={cl.cardPage}>
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
      <ProductOffer card={card} />
      <ProductSet card={card} />
      <ProductLook />
    </section>
  );
}
