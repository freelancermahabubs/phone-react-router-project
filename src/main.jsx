import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home/Home';
import App from './App';
import Phones from './components/Phones/Phones';
import Orders from './components/Orders/Orders';
import About from './components/About/About';
import Login from './components/Login/Login';

import cartPhoneLoader from './components/Loaders/cartPhonesLoader'
import ErrorPage from './components/ErrorPage/ErrorPage';
import Checkout from './components/Checkout/checkout';
const router = createBrowserRouter([
{
  path: "/",
  element: <App/>,
  errorElement: <ErrorPage/>,
  children: [{
    path: "/",
    element: <Home/>,
   
  },
  {
    path: "phones",
    element: <Phones/>,
    loader: () => fetch('phone.json')
  },
  {
    path: "orders",
    element: <Orders/>,
    loader: cartPhoneLoader,
  },
  {
    path: "about",
    element: <About/>
  },
  {
    path: 'login',
    element: <Login/>,
  },
  {
    path: 'checkout',
    element: <Checkout/>
  }
]
},
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
