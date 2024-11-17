import Heading from '../Heading/Heading';
import cards from './cards_of_category.json';
import cl from './index.module.scss';

export default function BuyTogether({ card }) {
  return (
    <ul className={cl.wrapList}>
      {cards.map((item) =>
        item.id !== card.id ? (
          <li key={item.id}>
            <img src={item.upload_images[0]} />
            <Heading type="h3">{item.name}</Heading>
          </li>
        ) : null
      )}
    </ul>
  );
}
