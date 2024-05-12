import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './AuthProvider.jsx';
import Login from './component/Authentication/login.jsx';
import Home from './component/Home/home.jsx';
import Register from './component/Authentication/Register.jsx';
import Error from './Error.jsx';
import Contact from './component/Home/Conatct.jsx';
import Addjob from './component/crud/Addjob.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<Error></Error>,
    children:[
      {
       path:'/',
       element:<Home></Home>
      },
      {
          path:'/log',
          element:<Login></Login>
      },
      {
        path:'/reg',
        element:<Register></Register>
      },
      {
        path:'/con',
        element:<Contact></Contact>
      },
      {
        path:'/addjob',
        element:<Addjob></Addjob>
      }
    ]
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
    </AuthProvider>
  </React.StrictMode>,
)
