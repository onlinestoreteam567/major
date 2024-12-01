import cl from './index.module.scss';
import card from './card.json';
import { useParams } from 'react-router-dom';
import BreadCrumbs from '@components/UI/BreadCrumbs/BreadCrumbs';
import CardMobile from './CardMobile';
import CardDesk from './CardDesk';
import Description from '@components/UI/CardProduct/Descript/Description';
import ListReviewsCard from '@components/UI/UserReviews/ListReviewsCard';
import ProductOffer from '@components/UI/CardProduct/ProductOffer/ProductOffer';

export default function ProductPage() {
  const path = useParams();
  console.log(path);
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
      <ListReviewsCard />
      <ProductOffer card={card} />
      <ProductOffer card={card} />
    </section>
  );
}
