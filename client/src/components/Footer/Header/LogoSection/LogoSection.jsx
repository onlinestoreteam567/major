import cl from './index.module.scss';
import { Link } from 'react-router-dom';
import SocialLinks from '@components/UI/SocialLinks/SocialLinks';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import useScreenSizes from '@hooks/useScreenSizes';

const LogoSection = () => {
  const { tablet } = useScreenSizes();
  const { getTranslation } = useTranslationNamespace('footer');

  return (
    <section className={cl.logoSection}>
      <Link to="/">
        <img src="/svg/footer/footerLogo.svg" alt={getTranslation('logoAlt')} />
      </Link>
      {tablet && <SocialLinks />}
    </section>
  );
};
export default LogoSection;
