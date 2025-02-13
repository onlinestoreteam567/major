import cl from './index.module.scss';

const PurposeCategoryCard = ({ card, name, getByPurposeCategory }) => {
  return (
    <label htmlFor="">
      <figure key={card.index} className={cl.catalogCardFigure}>
        <img src={card.image} alt="" />
        <figcaption>{card.name}</figcaption>
      </figure>
      <input type="radio" name={name} onChange={() => getByPurposeCategory(card.id)} />
    </label>
  );
};
export default PurposeCategoryCard;
