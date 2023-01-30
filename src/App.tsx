import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import RootLayout from './pages/RootLayout/RootLayout';
import HomePage from './pages/HomePage/HomePage';
import DesignPage from './pages/DesignPage/DesignPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        index: true
      },
      {
        path: "design",
        element: <DesignPage />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
