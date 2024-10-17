import { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import ProfilePage from '../pages/ProfilePage';
import Redux from './test-components/redux';

// Error Boundary
import ErrorBoundary from './error/ErrorBoundary'; // A component to handle errors

// Lazy loading
const Home = lazy(() => import('../pages/HomePage'));
const About = lazy(() => import('../pages/AboutPage'));
const Blog = lazy(() => import('../pages/BlogPage'));
const Contact = lazy(() => import('../pages/ContactPage'));
const Cooperation = lazy(() => import('../pages/СooperationPage'));

// Example for future features
// const Login = lazy(() => import('../pages/Login'));
// const Register = lazy(() => import('../pages/Register'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorBoundary />, // Error boundary for MainLayout
    children: [
      { index: true, element: <Home /> },
      { path: 'profile', element: <ProfilePage /> },
      { path: 'about', element: <About /> },
      { path: 'blog', element: <Blog /> },
      { path: 'contact', element: <Contact /> },
      { path: 'cooperation', element: <Cooperation /> },

      // test-components
      { path: 'redux', element: <Redux /> },
    ],
  },
  {
    element: <AuthLayout />,
    errorElement: <ErrorBoundary />, // Error boundary for AuthLayout
    children: [
      // Uncomment and add routes as needed
      // { path: 'login', element: <Login /> },
      // { path: 'register', element: <Register /> },
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
