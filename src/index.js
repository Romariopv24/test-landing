import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from './components/pages';
import SigninPage from './components/pages/singin'
 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: '/signin',
    element: <SigninPage/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);

