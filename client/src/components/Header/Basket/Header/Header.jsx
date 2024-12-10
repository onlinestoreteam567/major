import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import ButtonClose from '@assets/svg/ButtonClose/ButtonClose';

const Header = ({ onClick }) => {
  const { getTranslation } = useTranslationNamespace('basket');

  return (
    <section className={cl.basketHeaderSection}>
      <Heading type="h2">{getTranslation('basket')}</Heading>

      <ButtonClose onClick={onClick} />
    </section>
  );
};
export default Header;
