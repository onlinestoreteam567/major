import cl from './index.module.scss';

const PurposeCategoryCard = ({ card, name, selected, onChange, value }) => {
  return (
    <label htmlFor="">
      <figure key={card.index} className={cl.catalogCardFigure}>
        <img src={card.image} alt="" />
        <figcaption>{card.name}</figcaption>
      </figure>
      <input type="radio" name={name} checked={selected} onChange={() => onChange(value)} />
    </label>
  );
};
export default PurposeCategoryCard;
