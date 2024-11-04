import cl from './index.module.scss';

const Slide = ({ labelText, title, slideClassName }) => {
  return (
    <div className={`${cl.slide} ${cl[slideClassName]}`}>
      <section>
        <div>{labelText}</div>
        <h1>{title}</h1>
        <button>Додати до кошику</button>
      </section>
    </div>
  );
};

export default Slide;
