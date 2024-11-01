import PropTypes from 'prop-types';
import cl from './index.module.scss';

const CommentCard = ({ commentData }) => {
  return (
    <div className={cl.CommentCard}>
      <h3>{commentData.productTitle}</h3>
      
      {/* Rating section */}
      <div className={cl.ratingSection}>
        {'★'.repeat(commentData.rating)}{'☆'.repeat(5 - commentData.rating)}
      </div>
      
      {/* Comment text */}
      <p>{commentData.userComment}</p>
      
      <div className={cl.commentFooter}>
        <div>
          <strong>{commentData.userName}</strong>
          <p style={{color: 'black', fontWeight: 'bold'}}>{commentData.date}</p>
        </div>
        <a href={commentData.link} className={cl.link}>
          Перейти
        </a>
      </div>
    </div>
  );
};

// Define PropTypes for the comment data
CommentCard.propTypes = {
  commentData: PropTypes.shape({
    productTitle: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    userComment: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default CommentCard;
