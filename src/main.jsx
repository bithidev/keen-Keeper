import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from './Layout/RootLayout';
import Stats from './pages/stats/Stats';
import Timeline from './pages/timeline/timeline';
import Homepage from './pages/Homepage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import FriendDetails from './pages/FriendDetails/FriendDetails';

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
          path: '/stats',
          element: <Stats />
        },
        {
          path: '/timeline',
          element: <Timeline />
        },
         {
          path: '/friend/:id',

          element: <FriendDetails />
        }
      ],
      errorElement: <NotFoundPage />,
    },
  ],
  {
    basename: "/keen-keeper/", 
  }
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);