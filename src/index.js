import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './Sotre';

import HomePage from "./Components/HomePage";
import Store from "./Components/Store";
import ErrorPage from './Components/ErrorPage';
import Discord from './Components/Discord';
import ForumPage from './Components/ForumPage';
import SupportPage from './Components/SupportPage';
import LoginPage from './Components/LoginPage';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import RegisterPage from './Components/RegisterPage';
const token = localStorage.getItem("token");

const loggedOutRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <LoginPage />
      },
      {
        path: '/store',
        element: <Navigate to="/login" />
      },
      {
        path: '/discord',
        element: <Navigate to="/login" />
      },
      {
        path: '/forum',
        element: <Navigate to="/login" />
      },
      {
        path: '/support',
        element: <Navigate to="/login" />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/register',
        element: <RegisterPage />
      }
    ]
  }
])

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
          path: '/store',
          element: <Store />
      },
      {
        path: '/discord',
        element: <Discord />
      },
      {
        path: '/forum',
        element: <ForumPage />
      },
      {
        path: '/support',
        element: <SupportPage />
      },
      {
        path: '/login',
        element: <Navigate to="/" />
      },
      {
        path: '/register',
        element: <RegisterPage />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <App /> */}
      <RouterProvider router={token != null ? router : loggedOutRouter}/>
  </Provider>
);
