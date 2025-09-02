import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import useTranslationNamespace from '@hooks/useTranslationNamespace';
import ButtonClose from '@components/UI/Button/ButtonClose/ButtonClose';

const HeaderCartTopSection = ({ onClick }) => {
  const { getTranslation } = useTranslationNamespace('basket');

  return (
    <section className={cl.headerCartTopSection}>
      <Heading type="h2">{getTranslation('basket')}</Heading>

      <ButtonClose onClick={onClick} ariaLabel="ariaLabelBasket" />
    </section>
  );
};
export default HeaderCartTopSection;
