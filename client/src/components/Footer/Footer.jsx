import CopyrightSection from '@components/Footer/CopyrightSection/CopyrightSection';
import Header from '@components/Footer/Header/Header';
import './index.module.scss';

const Footer = () => {
  return (
    <footer>
      <Header />
      <CopyrightSection />
    </footer>
  );
};

export default Footer;
