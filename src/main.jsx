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
import { Toaster } from 'react-hot-toast';
import Recharge from './components/Recharge/Recharge';
import Services from './components/Services/Services';
import MetroRail from './components/MetroRail/MetroRail';
import Card from './components/Card/Card';
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
        path:"/recharge",
        element:<Recharge></Recharge>,

      },
      {
        path:"/card",
        element: <Card></Card>,
        loader: ()=>fetch('https://common-mrt-pass-system-production.up.railway.app/api/v1/card/cardInfo')
      },
      {
        path:"/services",
        element: <Services></Services>
      },
      {
        path: '/text',
        element: <Test></Test>
      },
      {
        path:'/metro',
        element: <MetroRail></MetroRail>,
        loader: ()=>fetch('../public/station.json')
      }

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster/>
  </React.StrictMode>,
)
