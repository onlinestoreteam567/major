import useScreenSizes from '@hooks/useScreenSizes';
import cl from './index.module.scss';
import Navigation from './Navigation/Navigation';
import FooterInfo from './FooterInfo/FooterInfo';
import SocialLinks from '@components/UI/SocialLinks/SocialLinks';
import LogoSection from './LogoSection/LogoSection';

const Header = () => {
  const { tablet } = useScreenSizes();
  return (
    <section className={cl.topSection}>
      <LogoSection />
      <Navigation />
      <FooterInfo />
      {!tablet && <SocialLinks />}
    </section>
  );
};
export default Header;
