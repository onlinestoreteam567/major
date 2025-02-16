import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';

export default function EmptyPage({ message }) {
  return (
    <div className={cl.wrapEmpty}>
      <img src="/logo.png" alt="Empty page" />
      <Heading type="h4">{message}</Heading>
    </div>
  );
}
