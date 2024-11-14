import Heading from '../Heading/Heading';
import cl from './index.module.scss';

export default function UserData({ review }) {
  return (
    <div className={cl.wrapUser}>
      <Heading type="h4">{review.user.user_name}</Heading>
      <p>{review.user.data}</p>
    </div>
  );
}
