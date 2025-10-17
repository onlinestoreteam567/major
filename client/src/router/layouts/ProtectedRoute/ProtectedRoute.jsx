import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  errorVerifyToken,
  loadVerifyToken,
  selectAccessToken,
  selectRefreshToken,
  selectVerifyToken,
} from '../../../redux/selectors';
import AdminNavigation from '../../../components/admin/AdminNavigation/AdminNavigation';
import cl from './index.module.scss';
import AdminGlobalMessage from './AdminGlobalMessage';
import { useEffect, useState } from 'react';
import { verifyAuthToken } from '@redux/admin/auth/service';
import AppLoader from '@router/AppLoader/AppLoader';
import { Helmet } from 'react-helmet-async';
import { injectReducers } from './../../../config/store';
const ADMIN_REDUCER_PATH = './adminReducers.js';

const FONT_URL = 'https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap';
const FONT_ID = 'mulish-admin-font';

const ProtectedRoute = () => {
  const [reducersLoaded, setReducersLoaded] = useState(false);

  const auth = useSelector(selectAccessToken);
  const refresh = useSelector(selectRefreshToken);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const verify = useSelector(selectVerifyToken);
  const loadVerify = useSelector(loadVerifyToken);
  const errorVerify = useSelector(errorVerifyToken);

  useEffect(() => {
    let isMounted = true;

    // 1. Dynamic Import for Code Splitting
    console.log(ADMIN_REDUCER_PATH);
    import(ADMIN_REDUCER_PATH)
      .then((module) => {
        if (isMounted) {
          // 2. Inject Reducers into the store
          injectReducers(module.adminReducers);
          setReducersLoaded(true);
        }
      })
      .catch((error) => {
        console.error('Failed to load and inject admin reducers:', error);
        // Handle loading failure (e.g., redirect to an error page)
      });

    // 3. Dynamic Font Loading
    if (!document.getElementById(FONT_ID)) {
      const link = document.createElement('link');
      link.id = FONT_ID;
      link.rel = 'stylesheet';
      link.href = FONT_URL;
      document.head.appendChild(link);
    }

    // Cleanup function for when the component unmounts
    return () => {
      isMounted = false;
    };
  }, []); // Runs once on mount

  useEffect(() => {
    // 1. Check if the font is already loaded to prevent duplicates
    if (document.getElementById(FONT_ID)) {
      return;
    }

    // 2. Create the new link element
    const link = document.createElement('link');
    link.href = FONT_URL;
    link.rel = 'stylesheet';
    link.id = FONT_ID;

    // Set crossorigin for better security and performance
    link.crossOrigin = 'anonymous';

    // 3. Append it to the document <head>
    document.head.appendChild(link);

    // 4. Cleanup function: Remove the link when the component unmounts
    // (e.g., when the user navigates away from the admin panel)
    return () => {
      const existingLink = document.getElementById(FONT_ID);
      if (existingLink) {
        existingLink.remove();
      }
    };
  }, []); // Empty dependency array means this runs only on mount and cleanup on unmount

  useEffect(() => {
    dispatch(verifyAuthToken({ token: refresh }));
  }, [dispatch, refresh]);

  useEffect(() => {
    if (location.pathname === '/admin') {
      navigate('/admin/products');
    }
  }, [location]);

  if (loadVerify === null) {
    return;
  }

  if (loadVerify || !reducersLoaded) {
    return <AppLoader />;
  }

  return verify && auth && !errorVerify ? (
    <div className={cl.adminLayout} id="protectedRoute">
      <Helmet>
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="https://major-gamma.vercel.app/" />
      </Helmet>

      <AdminNavigation />
      <Outlet />
      <AdminGlobalMessage />
    </div>
  ) : (
    <Navigate to="/admin/login" replace />
  );
};

export default ProtectedRoute;
