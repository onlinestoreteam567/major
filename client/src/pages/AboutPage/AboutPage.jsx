import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import Paragraph from '@components/UI/Texts/Paragraph/Paragraph';

const AboutPage = () => {
  return (
    <div className={cl.aboutPage}>
      <figure>
        <img src="/images/about/aboutBanner.webp" alt="" />
        <figcaption>
          <Heading type="h2">
            MAJOR <br />— Ваш салонний догляд вдома
          </Heading>
        </figcaption>
      </figure>
      <section>
        <Heading type="h2">Major — це більше, ніж просто бізнес</Heading>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <img src="/images/placeholder.webp" alt="" />
        </div>
        <div>
          <Paragraph type="body1">
            Це сімейна справа, яка об’єднує всіх нас у спільному прагненні створювати дійсно дієві продукти.
          </Paragraph>
          <Paragraph type="body1">
            У нас невелика але потужна команда, де кожен відповідає за свій процес: від створення формул і тестування до
            пакування і консультації клієнтів.
          </Paragraph>
          <Paragraph type="body1">
            Для нас українське — це не тренд і не гасло.
            <br />
            Це справа життя. Ми його створюємо власноруч. І водночас - захищаємо. <br />
            Бо любов — це не лише слова, це дії.
          </Paragraph>
        </div>
      </section>
      <section>
        <Heading type="h2">Коли світ зупинився — ми почали</Heading>
        {/* TODO fill alts */}
        <img src="/images/about/pandemic.webp" alt="" />
        <div>
          <Paragraph type="body1">
            У 2019 році в період пандемії світ зупинився, двері салонів зачинилися, але бажання жінок піклуватися про
            себе нікуди не зникло.
          </Paragraph>
          <Paragraph type="body1">
            Тоді ми вирішили: <br />
            &quot;Якщо неможливо потрапити до салону — ми створимо салон вдома.&quot; Саме тоді зародилася ідея
            створювати продукти, які забеспечать салонний ефект вдома.
          </Paragraph>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
