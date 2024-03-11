import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
// import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Test from './components/Test/Test';
// import Root from './components/Root/Root';
import Registration from './components/Registration/Registration';
const router = createBrowserRouter([
      {
        path:'/',
        element: <Registration></Registration>
      },
      {
        path: "/home",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: '/text',
        element: <Test></Test>
      }

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
