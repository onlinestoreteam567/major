import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import NavLink from '@UI/Texts/NavLink/NavLink';

const Navigation = () => {
  const { getTranslation } = useTranslationNamespace('footer');
  return (
    <ul className={cl.ulNavigation}>
      <section>
        <NavLink type="footer" to="cooperation">
          {getTranslation('cooperation')}
        </NavLink>
        <NavLink type="footer" to="publicOffer">
          {getTranslation('publicOffer')}
        </NavLink>
        <NavLink type="footer" to="publicOffer">
          {getTranslation('exchangeAndReturn')}
        </NavLink>
        <NavLink type="footer" to="paymentAndDelivery">
          {getTranslation('paymentAndDelivery')}
        </NavLink>
      </section>
    </ul>
  );
};
export default Navigation;
