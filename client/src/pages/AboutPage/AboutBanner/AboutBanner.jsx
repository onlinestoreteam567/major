import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';

const AboutBanner = () => {
  return (
    <figure className={cl.aboutBanner}>
      <img src="/images/about/aboutBanner.webp" alt="" />
      <figcaption>
        <Heading type="h2">
          MAJOR <br />— Ваш салонний догляд вдома
        </Heading>
      </figcaption>
    </figure>
  );
};
export default AboutBanner;
