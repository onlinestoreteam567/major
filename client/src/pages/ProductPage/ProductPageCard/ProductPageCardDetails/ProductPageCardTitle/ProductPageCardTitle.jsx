import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';

export default function ProductPageCardTitle({ card }) {
  return (
    <div className={cl.productPageCardTitle}>
      <Heading type="h2">{card.name}</Heading>
    </div>
  );
}
