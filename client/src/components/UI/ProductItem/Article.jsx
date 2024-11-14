import cl from './index.module.scss';

export default function Article({ card }) {
  return (
    <div className={cl.wrapArticle}>
      <div className={cl.wrapAvaible}>
        <div className={card.available ? cl.green : cl.gray}></div>
        <p>{card.available ? 'В наявності' : 'Тимчасово відсутній'}</p>
      </div>
      <p>Артикул: {card.article}</p>
    </div>
  );
}
