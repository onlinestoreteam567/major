import Stars from '@UI/Stars/Stars';
import cl from './index.module.scss';
import Heading from '@UI/Texts/Heading/Heading';
import { Link } from 'react-router-dom';
import Paragraph from '../Texts/Paragraph/Paragraph';

const CommentCard = ({ cardData }) => {
  console.log('cardData:', cardData);
  return (
    <div className={cl.commentCard}>
      <div className={cl.wrapReview}>
        <Heading type="h3">{cardData.product_name}</Heading>
        <Stars starsAmount={cardData.rating} />
        <Paragraph type="body2">{cardData.review_text}</Paragraph>
      </div>
      <div className={cl.cardFooter}>
        <Heading type="h4">
          {cardData.user_name}
          <br />
          {cardData.date}
        </Heading>
        <Link to={`/products/${cardData.product_id}`}>Перейти</Link>
      </div>
    </div>
  );
};

export default CommentCard;
