import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';

const BrandValues = () => {
  return (
    <div className={cl.brandValues}>
      <img src="/svg/logo.svg" alt="" />
      <img src="/images/about/aboutBackground.webp" alt="" />
      <section>
        <Heading type="h3">
          <img src="/svg/about/pencilChat.svg" alt="" /> Миттєвий результат
        </Heading>
        <Paragraph type="body1">
          MAJOR — це назва, що має значення. <br />
          <br />
          Ми довго шукали одне-єдине слово, яке відчуємо серцем. Воно означає «головний» — саме такими ми бачимо наші
          засоби у щоденному догляді.
        </Paragraph>
      </section>
      <section>
        <Heading type="h3">
          <img src="/svg/about/arm.svg" alt="" />
          Сила всередині
        </Heading>
        <Paragraph type="body1">
          MAJOR — це про силу. <br />
          <br />
          Жіночу силу, силу сім’ї, силу країни. Це не просто косметика, а прояв турботи, віри та внутрішнього стрижня
          кожної з нас.
        </Paragraph>
      </section>
      <section>
        <Heading type="h3">
          <img src="/svg/about/romanceArrows.svg" alt="" />
          Наше коріння
        </Heading>
        <Paragraph type="body1">
          MAJOR — це більше, ніж бізнес. <br />
          <br />
          Це сімейна справа, створена з любові та турботи. У нас невелика, але згуртована команда, об&apos;єднана
          спільною метою — допомогти кожній жінці легко піклуватися про себе.
        </Paragraph>
      </section>
      <section>
        <Heading type="h3">
          <img src="/svg/about/tryzub.svg" alt="" />
          Українське з гордістю
        </Heading>
        <Paragraph type="body1">
          MAJOR — це вибір на користь України. <br />
          <br />
          Ми виробляємо все в Україні, створюємо робочі місця, сплачуємо податки та підтримуємо ЗСУ. Кожна покупка — це
          внесок у сильну, незалежну країну.
        </Paragraph>
      </section>
    </div>
  );
};
export default BrandValues;
