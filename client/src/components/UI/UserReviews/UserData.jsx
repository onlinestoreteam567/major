import cl from './index.module.scss';

export default function UserData({ review }) {
  return (
    <div className={cl.wrapUser}>
      <h6>{review.user.user_name}</h6>
      <p>{review.user.data}</p>
    </div>
  );
}
