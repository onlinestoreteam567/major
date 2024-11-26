import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';

export default function Title({ card }) {
  return (
    <div className={cl.wrapTitle}>
      <h2>{card.name}</h2>
    </div>
  );
}
