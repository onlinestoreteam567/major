import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import ProfilePage from '../pages/ProfilePage';
import Redux from './test-components/redux';

// lazy loading
const Home = lazy(() => import('../pages/HomePage'));

// example for future features
// const Login = lazy(() => import('../pages/Login'));
// const Register = lazy(() => import('../pages/Register')); 

const AppRouter = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {/* Public Routes */}
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        
                        {/* Test Routes for developing */}
                        <Route path="/redux" element={<Redux />} />
                        {/* Auth Routes */}
                    </Route>

                    {/* Auth Routes */}
                    <Route element={<AuthLayout />}>
                        {/* <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} /> */}
                    </Route>

                    {/* Route for 404 */}
                    <Route path="*" element={<div>404 Not Found</div>} />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default AppRouter;