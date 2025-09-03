import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const AboutBanner = () => {
  const { getTranslation } = useTranslationNamespace('aboutPage');

  return (
    <figure className={cl.aboutBanner}>
      <img src="/images/about/aboutBanner.webp" alt={getTranslation('bannerImgAlt')} />
      <figcaption>
        <Heading type="h2">
          MAJOR <br />— {getTranslation('yourSalonCareAtHome')}
        </Heading>
      </figcaption>
    </figure>
  );
};
export default AboutBanner;
