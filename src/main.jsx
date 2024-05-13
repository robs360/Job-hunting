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
import Alljob from './component/crud/Alljob.jsx';
import Details from './component/crud/Details.jsx';
import Myjob from './component/crud/Myjob.jsx';
import Update from './component/crud/Update.jsx';
import Private from './Private.jsx';
import Appliedjob from './component/crud/Appliedjob.jsx';
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
        element:<Private><Addjob></Addjob></Private>
      },
      {
        path:'/alljob',
        element:<Alljob></Alljob>
      },
      {
        path:'/myjob',
        element:<Private><Myjob></Myjob></Private>
      },
      {
        path:'/applied',
        element:<Private><Appliedjob></Appliedjob></Private>
      },
      {
        path:'/update/:id',
        element:<Private><Update></Update></Private>,
        loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
      },
      {
        path:'/details/:id',
        element:<Private><Details></Details></Private>,
        loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
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
