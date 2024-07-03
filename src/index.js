import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './Sotre';

import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import Store from "./Components/Store";
import Footer from "./Components/Footer";
import ErrorPage from './Components/ErrorPage';
import Discord from './Components/Discord';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    {/* <App /> */}
      <RouterProvider router={router}/>
  </Provider>
);
