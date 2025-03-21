import { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainLayout from './layouts/MainLayout/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import ProfilePage from '@pages/ProfilePage';

//test-components
import Redux from './testСomponents/Redux';
import I18next from './testСomponents/I18next';
import CookieTest from './testСomponents/Cookie';

// Error Boundary
import ErrorBoundary from './error/ErrorBoundary'; // A component to handle errors
import FormTest from './testСomponents/FormTest';
import NotFound from '@components/helpers/NotFound';
import Loading from '@components/helpers/Loading';
import ProtectedRoute from './layouts/ProtectedRoute';
import AdminLoginPage from '../admin/components/AdminLoginPage/AdminLoginPage';
import AdminPage from '../admin/components/AdminPage/AdminPage';
import ProductManagement from '../admin/components/ProductPage/ProductManagement';
import ProductCreate from '../admin/components/ProductPage/ProductForm/ProductCreate';
import ProductEdit from '../admin/components/ProductPage/ProductEdit/ProductEdit';
import CategoriesManagement from '../admin/components/CategoriesPage/CategoriesManagement';
import CategoryCreate from '../admin/components/CategoriesPage/CategoryCreate';
import PurposeEdit from '../admin/components/CategoriesPage/PurposeEdit';
import TypeEdit from '../admin/components/CategoriesPage/TypeEdit';

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
    errorElement: <ErrorBoundary />,
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
    path: '/admin',
    element: <ProtectedRoute />,
    children: [
      { index: true, element: <AdminPage /> },

      { path: 'products', element: <ProductManagement /> },
      { path: 'products/create', element: <ProductCreate /> },
      { path: 'products/:id', element: <ProductEdit /> },

      { path: 'categories', element: <CategoriesManagement /> },
      { path: 'categories/create', element: <CategoryCreate /> },
      { path: 'type/:id', element: <TypeEdit /> },
      { path: 'purpose-categories/:id', element: <PurposeEdit /> },
    ],
  },
  { path: '/admin/login', element: <AdminLoginPage /> },
  {
    element: <AuthLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      { path: 'redux', element: <Redux /> },
      { path: 'i18next', element: <I18next /> },
      { path: 'cookie', element: <CookieTest /> },
      { path: 'form', element: <FormTest /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

const AppRouter = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRouter;
