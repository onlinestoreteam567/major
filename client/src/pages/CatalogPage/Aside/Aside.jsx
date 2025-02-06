import Heading from '@components/UI/Texts/Heading/Heading';
import cl from './index.module.scss';
import ButtonClose from '@components/UI/Button/ButtonClose/ButtonClose';
import useScreenSizes from '@hooks/useScreenSizes';
import { handleCloseWithDelay } from '@utils/handleCloseWithDelay';
const Aside = ({ children, handleSubmit, setIsAsideMobile, isHiddenAside, setisHiddenAside }) => {
  const { deskmin, deskmax } = useScreenSizes();

  const handleCloseAside = () => {
    handleCloseWithDelay(setisHiddenAside, setIsAsideMobile);
  };

  return (
    <aside className={`${cl.aside} ${isHiddenAside ? cl.hiddenAnimation : ''}`}>
      {!(deskmin || deskmax) && (
        <section className={cl.topSection}>
          <Heading type="h2">Фільтри</Heading>
          <ButtonClose onClick={() => handleCloseAside()} />
        </section>
      )}

      <form onSubmit={handleSubmit}>
        {children}
        <button type="submit">Вивести дані в консоль (заглушка)</button>
      </form>
    </aside>
  );
};

export default Aside;
