import { Navigate, useRoutes } from 'react-router-dom';
import FullLayout from './layouts/FullLayout';
import NavLayout from './layouts/NavLayout';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
//
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PollsPage from './pages/PollsPage';
import SignupPage from './pages/SignupPage';
import TrendingPage from './pages/TrendingPage';

export default function Router() {
  // The useRoutes hook is the functional equivalent of <Routes>, but it uses JavaScript objects instead of <Route> elements to define your routes. These objects have the same properties as normal <Route> elements, but they don't require JSX.
  return useRoutes([
    {
      path: '/users',
      element: <NavLayout />,
      children: [
        { path: 'signup', element: <SignupPage /> },
        { path: 'login', element: <LoginPage /> },
      ],
    },
    {
      path: '/polls',
      element: <NavLayout />,
      children: [
        { element: <Navigate to="/" replace /> },
        { path: 'interests/:interest', element: <SignupPage /> },
        { path: 'following', element: <TrendingPage /> },
      ],
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/signup',
      element: <SignupPage />,
    },
    {
      path: '/trending',
      element: <TrendingPage />,
    },
    {
      path: '/about',
      element: <AboutPage />,
    },
    {
      path: '/error',
      element: <ErrorPage />,
    },
    {
      path: '/',
      element: <NavLayout />,
      children: [
        // { element: <Navigate to="/" replace /> },
        { path: '/', element: <HomePage /> },
        // { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    { path: '*', element: <Navigate to="/error" replace /> },
  ]);
}
