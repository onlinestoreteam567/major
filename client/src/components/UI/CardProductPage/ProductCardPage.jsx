import cl from './index.module.scss';
import card from './card.json';
import CardMobile from './CardMobile';
import CardDesk from './CardDesk';
import Description from '../CardProduct/Descript/Description';
import ReviewsTitle from '../UserReviews/ReviewsTitle';
import ListReviewsCard from '../UserReviews/ListReviewsCard';
import BuyTogether from '../BuyTogether/BuyTogether';
import Heading from '../Texts/Heading/Heading';
import BreadCrumbs from '../BreadCrumbs/BreadCrumbs';

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
      <div className={cl.wrapReviews}>
        <ReviewsTitle />
        <ListReviewsCard />
      </div>
      <div className={cl.wrapReviews}>
        <Heading type="h2">Разом з цим товаром купують</Heading>
        <BuyTogether card={card} />
      </div>
    </section>
  );
}
