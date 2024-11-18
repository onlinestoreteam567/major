import Heading from '@components/UI/Heading/Heading';
import cl from './index.module.scss';

export default function Title({ card }) {
  return (
    <div className={cl.wrapTitle}>
      <Heading type="h2">{card.name}</Heading>
    </div>
  );
}
