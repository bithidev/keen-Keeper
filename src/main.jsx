import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from './Layout/RootLayout';
import Apps from './pages/apps/Apps';
import Homepage from './pages/Homepage';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Homepage />
        },
        {
          path: '/apps',
          element: <Apps />
        },
      ],
      errorElement: <h2>This page is not found 😢</h2>,
    },
  ],
  {
    basename: "/Keen-Keeper", 
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);