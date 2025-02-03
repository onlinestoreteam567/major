import cl from './index.module.scss';

export default function UserMessage({ review }) {
  return (
    <div className={cl.wrapMessage}>
      <p>{review.review_text}</p>
    </div>
  );
}
