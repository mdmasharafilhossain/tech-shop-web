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
import Brands from './Components/Brand/Brands';
import NotFond from './Components/NotFound/NotFond';
import BrandDeatils from './Components/BrandDetails/BrandDeatils';
import UpdateDetails from './Components/UpdateDetails/UpdateDetails';
import PrivateRoutes from './Components/PrivateRoutes/PrivateRoutes';

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
            path:"/card/:BrandName",
            element:<Brands></Brands>,
            errorElement:<NotFond></NotFond>,
            loader:()=>fetch('http://localhost:5000/pro')
            
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/addProduct",
        element:<PrivateRoutes><AddProducts></AddProducts></PrivateRoutes>
      },
      {
        path:"/myCart",
        element:<MyCarts></MyCarts>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/card/:BrandName/Brands/:name",
        element:<PrivateRoutes><BrandDeatils></BrandDeatils></PrivateRoutes>,
        loader:()=>fetch('http://localhost:5000/pro')
      },
      {
        path:"/card/:BrandName/update/:id",
        element:<PrivateRoutes><UpdateDetails></UpdateDetails></PrivateRoutes>,
        loader:({params})=>fetch(`http://localhost:5000/pro/${params.id}`)
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
