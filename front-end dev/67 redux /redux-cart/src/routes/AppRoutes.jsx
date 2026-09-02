import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'

import Cart from '../pages/Cart'
import Shop from '../pages/Shop'

const AppRoutes = () => {

  let router = createBrowserRouter([

    {
      path: "/",
      element: <MainLayout />,
      children:[
        {
          path:"",
          element: <Home />
        },
        {
          path:"shop",
          element: <Shop />
        },
        {
          path:"cart",
          element: <Cart />
        }
      ]
    }

  ])



  return <RouterProvider router={router}/>
}

export default AppRoutes
