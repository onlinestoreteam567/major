import cl from "./index.module.scss";
import png1 from "../../../assets/png/catalog/1.png";
import png2 from "../../../assets/png/catalog/2.png";
import png3 from "../../../assets/png/catalog/3.png";
import png4 from "../../../assets/png/catalog/4.png";
import png5 from "../../../assets/png/catalog/5.png";
import png6 from "../../../assets/png/catalog/6.png";

const Catalog = () => {
  return (
    <div className={cl.catalogWrapper}>
      <h2>Каталог</h2>
      <section>
        <section>
          <figure>
            <img src={png1} alt="" />
            <figcaption>Для нормального волосся</figcaption>
          </figure>
          <figure>
            <img src={png2} alt="" />
            <figcaption>Для фарбованого волосся</figcaption>
          </figure>
          <figure>
            <img src={png3} alt="" />
            <figcaption>Для пошкодженого волосся</figcaption>
          </figure>
        </section>
        <section>
          <figure>
            <img src={png4} alt="" />
            <figcaption>Для тонкого волосся</figcaption>
          </figure>
          <figure>
            <img src={png5} alt="" />
            <figcaption>Глибоке очищення</figcaption>
          </figure>
          <figure>
            <img src={png6} alt="" />
            <figcaption>Для росту волосся</figcaption>
          </figure>
        </section>
      </section>
    </div>
  );
};
export default Catalog;
