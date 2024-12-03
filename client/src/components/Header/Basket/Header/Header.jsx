import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';

const Header = ({ onClick }) => {
  return (
    <section className={cl.basketHeaderSection}>
      <Heading type="h2">Кошик</Heading>

      <img onClick={onClick} src="/svg/crossIcon.svg" alt="Закрити" />
    </section>
  );
};
export default Header;
