import { Outlet } from 'react-router-dom';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import useScrollToTop from '@hooks/useScrollToTop';
import cl from './index.module.scss';

const MainLayout = () => {
  useScrollToTop();

  return (
    <div className={cl.mainLayout}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
