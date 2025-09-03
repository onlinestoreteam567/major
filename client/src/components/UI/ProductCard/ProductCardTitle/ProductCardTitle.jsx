import cl from './index.module.scss';
ProductCardTitle;
export default function ProductCardTitle({ card }) {
  return (
    <div className={`${cl.wrapTitle} ${!card.available ? cl.disabled : ''}`}>
      <h3>{card.name}</h3>
    </div>
  );
}
