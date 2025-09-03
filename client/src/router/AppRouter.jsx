import { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainLayout from './layouts/MainLayout/MainLayout';

// Error Boundary
import ErrorBoundary from './error/ErrorBoundary'; // A component to handle errors
import NotFound from '@pages/NotFoundPage/NotFoundPage';
import ErrorPage from '@pages/ErrorPage/ErrorPage';
import AppLoader from '@router/AppLoader/AppLoader';

// Protected Route (Admin)
import ProtectedRoute from './layouts/ProtectedRoute/ProtectedRoute';
import AdminLoginPage from '@components/admin/AdminLoginPage/AdminLoginPage';
import ProductManagement from '@components/admin/ProductManagement/ProductManagement';
import ProductCreate from '@components/admin/ProductManagement/ProductCreate/ProductCreate';
import ProductEdit from '@components/admin/ProductManagement/ProductEdit/ProductEdit';
import CategoriesManagement from '@components/admin/CategoriesManagement/CategoriesManagement';
import CategoryCreate from '@components/admin/CategoriesManagement/CategoryCreate/CategoryCreate';
import PurposeEdit from '@components/admin/CategoriesManagement/Purpose/PurposeEdit/PurposeEdit';
import TypeEdit from '@components/admin/CategoriesManagement/Type/TypeEdit/TypeEdit';
import PromocodeManagement from '@components/admin/PromocodeManagement/PromocodeManagement';
import PromocodeCreate from '@components/admin/PromocodeManagement/PromocodeCreate/PromocodeCreate';
import PromocodeEdit from '@components/admin/PromocodeManagement/PromocodeEdit/PromocodeEdit';
import BannerManagement from '@components/admin/BannerManagement/BannerManagement';
import BannerCreate from '@components/admin/BannerManagement/BannerCreate/BannerCreate';
import BannerEdit from '@components/admin/BannerManagement/BannerEdit/BannerEdit';
import PartnersManagement from '@components/admin/PartnersManagement/PartnersManagement';
import PartnerCreate from '@components/admin/PartnersManagement/PartnerCreate/PartnerCreate';
import PartnerEdit from '@components/admin/PartnersManagement/PartnerEdit/PartnerEdit';
import ReviewsManagement from '@components/admin/ReviewsManagement/ReviewsManagement';
import ContactsManagement from '@components/admin/ContactsManagement/ContactsManagement';

// Lazy loading
const Home = lazy(() => import('@pages/HomePage/HomePage'));
const Catalog = lazy(() => import('@pages/CatalogPage/CatalogPage'));
const About = lazy(() => import('@pages/AboutPage/AboutPage'));
const Contact = lazy(() => import('@pages/ContactPage'));
const Cooperation = lazy(() => import('@pages/СooperationPage'));
const ProductPage = lazy(() => import('@pages/ProductPage/ProductPage'));
const CheckoutPage = lazy(() => import('@pages/CheckoutPage/CheckoutPage'));

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
      { path: 'about', element: <About /> },
      { path: 'catalog', element: <Catalog /> },
      { path: 'catalog/:id', element: <ProductPage /> },
      { path: 'cooperation', element: <Cooperation /> },
      { path: 'checkout', element: <CheckoutPage /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
  {
    path: '/admin',
    element: <ProtectedRoute />,
    children: [
      { index: true, element: <div></div> },

      { path: 'products', element: <ProductManagement /> },
      { path: 'products/create', element: <ProductCreate /> },
      { path: 'products/:id', element: <ProductEdit /> },

      { path: 'categories', element: <CategoriesManagement /> },
      { path: 'categories/create', element: <CategoryCreate /> },
      { path: 'type/:id', element: <TypeEdit /> },
      { path: 'purpose-categories/:id', element: <PurposeEdit /> },

      { path: 'promocodes', element: <PromocodeManagement /> },
      { path: 'promocodes/create', element: <PromocodeCreate /> },
      { path: 'promocodes/:id', element: <PromocodeEdit /> },

      { path: 'banners', element: <BannerManagement /> },
      { path: 'banners/create', element: <BannerCreate /> },
      { path: 'banners/:id', element: <BannerEdit /> },

      { path: 'partners', element: <PartnersManagement /> },
      { path: 'partners/create', element: <PartnerCreate /> },
      { path: 'partners/:id', element: <PartnerEdit /> },

      { path: 'reviews', element: <ReviewsManagement /> },
      { path: 'contacts', element: <ContactsManagement /> },
    ],
  },
  { path: '/admin/login', element: <AdminLoginPage /> },
  {
    path: '*',
    element: <NotFound />,
  },
  /*** */
  {
    path: '/error-test',
    element: <ErrorPage />,
  },
  /**** */
]);

const AppRouter = () => {
  return (
    <Suspense fallback={<AppLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRouter;
