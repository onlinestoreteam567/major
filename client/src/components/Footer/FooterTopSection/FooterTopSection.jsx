import useScreenSizes from '@hooks/useScreenSizes';
import cl from './index.module.scss';
import FooterNavigation from './FooterNavigation/FooterNavigation';
import FooterInfo from './FooterInfo/FooterInfo';
import SocialLinks from '@UI/SocialLinks/SocialLinks';

const FooterTopSection = () => {
  const { tablet, deskmin, deskmax } = useScreenSizes();
  return (
    <section className={cl.footerTopSection}>
      {(tablet || deskmin || deskmax) && (
        <div>
          <SocialLinks />
        </div>
      )}
      <div className={cl.wrapper}>
        <FooterNavigation />
        <FooterInfo />
      </div>
      {!tablet && !deskmin && !deskmax && <SocialLinks />}
    </section>
  );
};
export default FooterTopSection;
