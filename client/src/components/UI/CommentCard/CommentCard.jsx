import Button from '@UI/Button/Button';
import Stars from '@UI/Stars/Stars';
import cl from './index.module.scss';
import Heading from '@components/UI/Texts/Heading/Heading';
import Paragraph from '../Texts/Paragraph/Paragraph';

const CommentCard = ({ cardData }) => {
  return (
    <div className={cl.commentCard}>
      <Heading type="h3">{cardData.productTitle}</Heading>
      <Stars starsAmount={cardData.rating} />
      <Paragraph type="body2">{cardData.userComment}</Paragraph>
      <section className={cl.commentCardFooter}>
        <Heading type="h4">
          {cardData.userName}
          <br />
          {cardData.date}
        </Heading>
        <Button variant="link" purpose="fitContent">
          Перейти
        </Button>
      </section>
    </div>
  );
};
export default CommentCard;
