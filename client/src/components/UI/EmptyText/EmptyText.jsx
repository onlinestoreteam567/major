import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';

export default function EmptyText({ message }) {
  return (
    <div className={cl.emptyText}>
      <img src="/images/logo.png" alt="Empty page" />
      <Heading type="h4">{message}</Heading>
    </div>
  );
}
