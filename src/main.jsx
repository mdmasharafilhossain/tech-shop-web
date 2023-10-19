import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import AddProducts from './Components/AddProduct/AddProducts';
import MyCarts from './Components/MyCart/MyCarts';
import Register from './Components/Register/Register';
import AuthProviders from './Components/AuthProviders/AuthProviders';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/addProduct",
        element:<AddProducts></AddProducts>
      },
      {
        path:"/myCart",
        element:<MyCarts></MyCarts>
      },
      {
        path:"/register",
        element:<Register></Register>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProviders>
   <RouterProvider router={router} />
   </AuthProviders>
  </React.StrictMode>,
)
