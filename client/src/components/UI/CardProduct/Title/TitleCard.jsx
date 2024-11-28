import cl from './index.module.scss';

export default function TitleCard({ card }) {
  return (
    <div className={cl.wrapTitle}>
      <h2>{card.name}</h2>
    </div>
  );
}
