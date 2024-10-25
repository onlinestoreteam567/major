import BottomSection from './BottomSection';
import cl from './index.module.scss';
import LeftSection from './LeftSection';
import Navigation from './Navigation';
import RightSection from './RightSection';
const Footer = () => {
  return (
    <footer>
      <section className={cl.topSection}>
        <LeftSection />
        <Navigation />
        <RightSection />
      </section>
      <BottomSection />
    </footer>
  );
};

export default Footer;
