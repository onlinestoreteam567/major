import { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainLayout from './layouts/MainLayout/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import ProfilePage from '@pages/ProfilePage';

//test-components
import Redux from './testComponents/Redux';
import I18next from './testComponents/I18next';
import CookieTest from './testComponents/Cookie';

// Error Boundary
import ErrorBoundary from './error/ErrorBoundary'; // A component to handle errors
import FormTest from './testComponents/FormTest';
import Requests from './testComponents/Requests';

// Lazy loading
const Home = lazy(() => import('@pages/HomePage/HomePage'));
const Catalog = lazy(() => import('@pages/CatalogPage/CatalogPage'));
const About = lazy(() => import('@pages/AboutPage'));
const Blog = lazy(() => import('@pages/BlogPage'));
const Contact = lazy(() => import('@pages/ContactPage'));
const Cooperation = lazy(() => import('@pages/СooperationPage'));
const ProductPage = lazy(() => import('@components/ProductPage/ProductPage'));

// Example for future features
// const Login = lazy(() => import('@pages/Login'));
// const Register = lazy(() => import('@pages/Register'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorBoundary />, // Error boundary for MainLayout
    children: [
      { index: true, element: <Home /> },
      { path: 'profile', element: <ProfilePage /> },
      { path: 'about', element: <About /> },
      { path: 'catalog', element: <Catalog /> },
      { path: 'catalog/:id', element: <ProductPage /> },
      { path: 'blog', element: <Blog /> },
      { path: 'contact', element: <Contact /> },
      { path: 'cooperation', element: <Cooperation /> },
    ],
  },
  {
    element: <AuthLayout />,
    errorElement: <ErrorBoundary />, // Error boundary for AuthLayout
    children: [
      // Uncomment and add routes as needed
      // { path: 'login', element: <Login /> },
      // { path: 'register', element: <Register /> },

      // test-components
      { path: 'redux', element: <Redux /> },
      { path: 'i18next', element: <I18next /> },
      { path: 'cookie', element: <CookieTest /> },
      { path: 'form', element: <FormTest /> },
      { path: 'requests', element: <Requests /> },
    ],
  },
  {
    path: '*',
    element: <div style={{ color: 'black' }}>404 Not Found</div>,
  },
]);

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRouter;
