import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Registration from './components/Registration/Registration';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Registration></Registration>,
    children:[
      {
        path: "home",
        element: <Home></Home>
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
