import cl from './index.module.scss';
import { Link } from 'react-router-dom';
import SocialLinks from '@UI/SocialLinks/SocialLinks';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import useScreenSizes from '@hooks/useScreenSizes';

const LogoSection = () => {
  const { tablet, deskmin, deskmax } = useScreenSizes();
  const { getTranslation } = useTranslationNamespace('footer');

  return (
    <section className={cl.logoSection}>
      <Link to="/">
        <img src="/svg/footer/footerLogo.svg" alt={getTranslation('logoAlt')} />
      </Link>
      {(tablet || deskmin || deskmax) && <SocialLinks />}
    </section>
  );
};
export default LogoSection;
