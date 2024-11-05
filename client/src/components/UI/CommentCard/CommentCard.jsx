import Button from '@UI/Button/Button';
import Stars from '@UI/Stars/Stars';
import cl from './index.module.scss';

const CommentCard = ({ cardData }) => {
  return (
    <div className={cl.commentCard}>
      <h4>{cardData.productTitle}</h4>
      <Stars starsAmount={cardData.rating} />
      <p>{cardData.userComment}</p>
      <section className={cl.commentCardFooter}>
        <h5>
          {cardData.userName}
          <br />
          {cardData.date}
        </h5>
        <Button variant="link" purpose="fitContent">
          Перейти
        </Button>
      </section>
    </div>
  );
};
export default CommentCard;
