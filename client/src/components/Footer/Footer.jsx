import CopyrightSection from '@components/Footer/CopyrightSection/CopyrightSection';
import Header from '@components/Footer/Header/Header';
import cl from './index.module.scss';

const Footer = () => {
  return (
    <footer className={cl.footer}>
      <Header />
      <CopyrightSection />
    </footer>
  );
};

export default Footer;
