import useScreenSizes from '@hooks/useScreenSizes';
import cl from './index.module.scss';
import Navigation from './Navigation/Navigation';
import FooterInfo from './FooterInfo/FooterInfo';
import SocialLinks from '@UI/SocialLinks/SocialLinks';

const Header = () => {
  const { tablet, deskmin, deskmax } = useScreenSizes();
  return (
    <section className={cl.topSection}>
      {(tablet || deskmin || deskmax) && (
        <div>
          <SocialLinks />
        </div>
      )}
      <div className={cl.wrapper}>
        <Navigation />
        <FooterInfo />
      </div>
      {!tablet && !deskmin && !deskmax && <SocialLinks />}
    </section>
  );
};
export default Header;
