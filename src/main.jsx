import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './page/Home';
import Owner from './page/Owner';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />
  },
  {
    path:'/owner',
    element: <Owner />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
