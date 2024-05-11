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
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
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
