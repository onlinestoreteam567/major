import FooterCopyrightSection from '@components/Footer/FooterCopyrightSection/FooterCopyrightSection';
import FooterTopSection from '@components/Footer/FooterTopSection/FooterTopSection';
import cl from './index.module.scss';

const Footer = () => {
  return (
    <footer className={cl.footer}>
      <FooterTopSection />
      <FooterCopyrightSection />
    </footer>
  );
};

export default Footer;
