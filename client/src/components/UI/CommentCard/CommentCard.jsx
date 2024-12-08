import Stars from '@UI/Stars/Stars';
import cl from './index.module.scss';
import Heading from '@UI/Texts/Heading/Heading';
import { Link } from 'react-router-dom';

const CommentCard = ({ cardData }) => {
  return (
    <div className={cl.commentCard}>
      <div className={cl.wrapReview}>
        <Heading type="h3">{cardData.productTitle}</Heading>
        <Stars starsAmount={cardData.rating} />
        <p>{cardData.userComment}</p>
      </div>
      <div className={cl.cardFooter}>
        <Heading type="h4">
          {cardData.userName}
          <br />
          {cardData.date}
        </Heading>
        <Link to="/catalog">Перейти</Link>
      </div>
    </div>
  );
};
export default CommentCard;
