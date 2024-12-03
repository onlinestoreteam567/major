import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';

const Header = ({ onClick }) => {
  const { getTranslation } = useTranslationNamespace('basket');

  return (
    <section className={cl.basketHeaderSection}>
      <Heading type="h2">{getTranslation('basket')}</Heading>

      <img onClick={onClick} src="/svg/crossIcon.svg" alt="Закрити" />
    </section>
  );
};
export default Header;
