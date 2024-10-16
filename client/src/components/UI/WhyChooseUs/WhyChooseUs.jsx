import cl from './index.module.scss';
import discountIcon from '../../../assets/png/whyChooseUs/discount.png';
import fastDeliveryIcon from '../../../assets/png/whyChooseUs/fastDelivery.png';
import qualityIcon from '../../../assets/png/whyChooseUs/quality.png';
import thumbUpIcon from '../../../assets/png/whyChooseUs/thumbUp.png';

const WhyChooseUs = () => {
  return (
    <div className={cl.whyChooseUsWrapper}>
      <h2>Чому обирають нас?</h2>
      <section className={cl.figuresWrapper}>
        <section>
          <figure>
            <img src={discountIcon} alt="Іконка знижки для постійних клієнтів" />
            <figcaption>
              <h3>Знижки для постійних клієнтів</h3>
              <p>
                Як наш постійний клієнт, ви маєте змогу скористатися спеціальними знижками та ексклюзивними
                пропозиціями.
              </p>
            </figcaption>
          </figure>
          <figure>
            <img src={fastDeliveryIcon} alt="Іконка швидкої відправки" />
            <figcaption>
              <h3>Швидка відправка</h3>
              <p>
                Ми розуміємо, як важливо отримувати замовлення вчасно, тому пропонуємо вам послугу швидкої та безпечної
                відправки.
              </p>
            </figcaption>
          </figure>
        </section>
        <section>
          <figure>
            <img src={qualityIcon} alt="Іконка сертифіката якості" />
            <figcaption>
              <h3>Сертифікат якості</h3>
              <p>
                Цей документ є підтвердженням нашої відданості високим стандартам і забезпечує вам впевненість у
                ефективності продуктів та послуг.
              </p>
            </figcaption>
          </figure>
          <figure>
            <img src={thumbUpIcon} alt="Іконка лайку" />
            <figcaption>
              <h3>Результат з першого використання</h3>
              <p>
                Завдяки інноваційним формулам і високоякісним інгредієнтам, ви побачите та відчуєте ефект вже після
                першого використання.
              </p>
            </figcaption>
          </figure>
        </section>
      </section>
    </div>
  );
};
export default WhyChooseUs;
