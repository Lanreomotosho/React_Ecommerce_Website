import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home/Home.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Banner } from './pages/Home/Banner.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
     <RouterProvider router={router} />
)
