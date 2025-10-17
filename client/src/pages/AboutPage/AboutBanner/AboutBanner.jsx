import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const AboutBanner = () => {
  const { getTranslation } = useTranslationNamespace('aboutPage');

  const deskmaxImagePath = '/images/about/aboutBannerDeskmax.webp';
  const deskminImagePath = '/images/about/aboutBannerDeskmin.webp';
  const tabletImagePath = '/images/about/aboutBannerTablet.webp';
  const mobileImagePath = '/images/about/aboutBannerMobile.webp';

  return (
    <figure className={cl.aboutBanner}>
      <picture>
        <source srcSet={deskmaxImagePath} media="(min-width: 1440px)" />
        <source srcSet={deskminImagePath} media="(min-width: 1024px)" />
        <source srcSet={tabletImagePath} media="(min-width: 768px)" />
        <img fetchpriority="high" src={mobileImagePath} alt={getTranslation('bannerImgAlt')} />
      </picture>

      {/* <img src="/images/about/aboutBanner.webp" alt={getTranslation('bannerImgAlt')} /> */}
      <figcaption>
        <Heading type="h2">
          MAJOR <br />— {getTranslation('yourSalonCareAtHome')}
        </Heading>
      </figcaption>
    </figure>
  );
};
export default AboutBanner;
