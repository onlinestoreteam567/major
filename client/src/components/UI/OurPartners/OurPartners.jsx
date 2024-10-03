import cl from "./index.module.scss";
import map from "../../../assets/png/ourPartners/map.png";
import point from "../../../assets/svg/ourPartners/point.svg";

const OurPartners = () => {
  return (
    <section className={cl.ourPartnersWrapper}>
      <figure>
        <h2>Наші партнери</h2>
        <img src={map} alt="" />

        <img className={`${cl.point} ${cl.lytskPoint}`} src={point} alt="" />
        <img className={`${cl.point} ${cl.lvivPoint}`} src={point} alt="" />
        <img className={`${cl.point} ${cl.ternopilPoint}`} src={point} alt="" />
        <img
          className={`${cl.point} ${cl.ivanoFrankivskPoint}`}
          src={point}
          alt=""
        />
        <img className={`${cl.point} ${cl.vinnitsaPoint}`} src={point} alt="" />
      </figure>
      <aside>
        <h3>PURE BEAUTY</h3>
        <section>
          <h4>Графік роботи:</h4>
          <br />
          <p>Пн - Пт: 8:00 - 20:00</p>
          <p>Сб - Нд: 10:00 - 15:00</p>
        </section>
        <section>
          <h4>Адреса:</h4>
          <br />
          <p>вулиця Григоровича, 6, Львів, Львівська область, 79000</p>
        </section>
        <button>Відкрити Google Map</button>
      </aside>
      <button>Стати партнером</button>
    </section>
  );
};
export default OurPartners;
