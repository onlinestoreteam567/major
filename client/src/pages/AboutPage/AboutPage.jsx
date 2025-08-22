import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';

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
    </div>
  );
};

export default AboutPage;
