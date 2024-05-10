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
import Bus from './components/Bus/Bus';
import Launch from './components/Launch/Launch';
import Plane from './components/Plane/Plane';
import PaymentSuccess from './components/PaymentSuccess/PaymentSuccess';
import PaymentFail from './components/PaymentFail/paymentFail';
import Profile from './components/Profile/Profile';
import About from './components/About/About';
import ForgetPass from './ForgetPass/ForgetPass';
const router = createBrowserRouter([
      {
        path:'/',
        element: <Registration></Registration>
      },
      {
        path:"/forget",
        element:<ForgetPass></ForgetPass>
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
        element: <Card></Card>
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
      },
      {
        path:'/bus',
        element: <Bus></Bus>,
        loader: ()=>fetch('../public/station.json')
      },
      {
        path:'/launch',
        element: <Launch></Launch>
      },
      {
        path: '/plane',
        element: <Plane></Plane>
      }
      ,
      {
        path:'/card/recharge/success/:tran_Id',
        element: <PaymentSuccess></PaymentSuccess>
      },
      {
        path:'/card/recharge/fail/:tran_Id',
        element: <PaymentFail></PaymentFail>
      },
      {
        path: "/profile",
        element: <Profile></Profile>
      },
      {
        path: "/about",
        element: <About></About>
      }

]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster/>
  </React.StrictMode>,
)
