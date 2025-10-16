import { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainLayout from './layouts/MainLayout/MainLayout';

import ErrorBoundary from './error/ErrorBoundary';
import NotFound from '@pages/NotFoundPage/NotFoundPage';
import ErrorPage from '@pages/ErrorPage/ErrorPage';
import AppLoader from '@router/AppLoader/AppLoader';

import ProtectedRoute from './layouts/ProtectedRoute/ProtectedRoute';
import RoleBasedRoute from './RoleBasedRoute';

// --- PUBLIC PAGES  ---
const Home = lazy(() => import('@pages/HomePage/HomePage'));
const Catalog = lazy(() => import('@pages/CatalogPage/CatalogPage'));
const About = lazy(() => import('@pages/AboutPage/AboutPage'));
const Contact = lazy(() => import('@pages/ContactPage'));
const Cooperation = lazy(() => import('@pages/СooperationPage'));
const ProductPage = lazy(() => import('@pages/ProductPage/ProductPage'));
const CheckoutPage = lazy(() => import('@pages/CheckoutPage/CheckoutPage'));

// --- ADMIN PAGES ---
const AdminLoginPage = lazy(() => import('@components/admin/AdminLoginPage/AdminLoginPage'));

const ProductManagement = lazy(() => import('@components/admin/ProductManagement/ProductManagement'));
const ProductCreate = lazy(() => import('@components/admin/ProductManagement/ProductCreate/ProductCreate'));
const ProductEdit = lazy(() => import('@components/admin/ProductManagement/ProductEdit/ProductEdit'));

const CategoriesManagement = lazy(() => import('@components/admin/CategoriesManagement/CategoriesManagement'));
const CategoryCreate = lazy(() => import('@components/admin/CategoriesManagement/CategoryCreate/CategoryCreate'));
const PurposeEdit = lazy(() => import('@components/admin/CategoriesManagement/Purpose/PurposeEdit/PurposeEdit'));
const TypeEdit = lazy(() => import('@components/admin/CategoriesManagement/Type/TypeEdit/TypeEdit'));

const PromocodeManagement = lazy(() => import('@components/admin/PromocodeManagement/PromocodeManagement'));
const PromocodeCreate = lazy(() => import('@components/admin/PromocodeManagement/PromocodeCreate/PromocodeCreate'));
const PromocodeEdit = lazy(() => import('@components/admin/PromocodeManagement/PromocodeEdit/PromocodeEdit'));

const ReviewsManagement = lazy(() => import('@components/admin/ReviewsManagement/ReviewsManagement'));
const ContactsManagement = lazy(() => import('@components/admin/ContactsManagement/ContactsManagement'));

const Settings = lazy(() => import('@components/admin/Settings/Settings'));
const ManagerCreate = lazy(() => import('@components/admin/Settings/ManagerCreate/ManagerCreate'));
const ManagerEdit = lazy(() => import('@components/admin/Settings/ManagerEdit/ManagerEdit'));

const BannerManagement = lazy(() => import('@components/admin/BannerManagement/BannerManagement'));
const BannerCreate = lazy(() => import('@components/admin/BannerManagement/BannerCreate/BannerCreate'));
const BannerEdit = lazy(() => import('@components/admin/BannerManagement/BannerEdit/BannerEdit'));

const PartnersManagement = lazy(() => import('@components/admin/PartnersManagement/PartnersManagement'));
const PartnerCreate = lazy(() => import('@components/admin/PartnersManagement/PartnerCreate/PartnerCreate'));
const PartnerEdit = lazy(() => import('@components/admin/PartnersManagement/PartnerEdit/PartnerEdit'));

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

      { path: 'reviews', element: <ReviewsManagement /> },

      {
        element: <RoleBasedRoute allowedRoles={[1]} />,
        children: [
          { path: 'banners', element: <BannerManagement /> },
          { path: 'banners/create', element: <BannerCreate /> },
          { path: 'banners/:id', element: <BannerEdit /> },

          { path: 'partners', element: <PartnersManagement /> },
          { path: 'partners/create', element: <PartnerCreate /> },
          { path: 'partners/:id', element: <PartnerEdit /> },

          { path: 'contacts', element: <ContactsManagement /> },

          { path: 'settings', element: <Settings /> },
          { path: 'settings/create', element: <ManagerCreate /> },
          { path: 'settings/:id', element: <ManagerEdit /> },
        ],
      },
    ],
  },
  { path: '/admin/login', element: <AdminLoginPage /> },

  {
    path: '*',
    element: <NotFound />,
  },

  {
    path: '/error-test',
    element: <ErrorPage />,
  },
]);

const AppRouter = () => {
  return (
    <Suspense fallback={<AppLoader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default AppRouter;
