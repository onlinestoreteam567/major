import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';

export default function TitleCard({ card }) {
  return (
    <div className={cl.wrapTitle}>
      <Heading type="h2">{card.name}</Heading>
    </div>
  );
}
