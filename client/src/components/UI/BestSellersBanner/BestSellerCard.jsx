import styles from "./index.module.scss";
import stars from "../../../assets/svg/banners/stars.svg";
import hryvniaSymbol from "../../../assets/svg/hryvnia.svg";

// Change..

const BestSellerCard = ({ cardData }) => {
  return (
    <div className={styles.card}>
      <section>
        <img src={cardData.img.src} alt={cardData.imgAlt} />
        <h2>{cardData.title}</h2>
        <section className={styles.starsImageSection}>
          <img src={stars} alt="stars"></img>
          <img src={stars} alt="stars"></img>
          <img src={stars} alt="stars"></img>
          <img src={stars} alt="stars"></img>
          <img src={stars} alt="stars"></img>
          <span>{cardData.feedbackAmount}</span>
        </section>
      </section>
      <section className={styles.cardFooter}>
        <h3>
          <span>{cardData.price}</span>{" "}
          <img
            className={styles.hryvniaSymbol}
            src={hryvniaSymbol}
            alt="hryvnia symbol"
          />
        </h3>
        <h3>
          <span>{cardData.mlQuantity}мл.</span>
        </h3>
      </section>
    </div>
  );
};
export default BestSellerCard;

// cardData example:
// cardData={{
//   img: {
//     src: firstSlideImage,
//     alt: "First best seller image",
//   },
//   title: "title",
//   price: "123",
//   mlQuantity: "555",
//   feedbackAmount: "1",
// }}
