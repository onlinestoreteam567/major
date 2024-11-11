import ListReviewsCard from '../UserReviews/ListReviewsCard';
import CardDesk from './CardDesk';
import CardMobile from './CardMobile';
import cl from './index.module.scss';
import TopLink from './TopLink';
import Description from './Description';
import card from './card.json';
import ReviewsTitle from '../UserReviews/ReviewsTitle';

export default function ProductCardPage() {
  return (
    <section className={cl.cardPage}>
      <div className={cl.topCase}>
        <TopLink />
        <div className={cl.wrapMobile}>
          <CardMobile />
        </div>
        <div>
          <CardDesk className={cl.wrapDesk} />
        </div>
      </div>
      <Description card={card} />
      <div className={cl.wrapReviews}>
        <ReviewsTitle />
        <ListReviewsCard />
      </div>
    </section>
  );
}
