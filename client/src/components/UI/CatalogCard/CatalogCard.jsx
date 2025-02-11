import cl from './index.module.scss';

const CatalogCard = ({ card }) => {
  return (
    <figure key={card.index} className={cl.catalogCardFigure}>
      {/* <img src={card.image} alt="" /> */}
      <figcaption>{card.name}</figcaption>
    </figure>
  );
};
export default CatalogCard;
