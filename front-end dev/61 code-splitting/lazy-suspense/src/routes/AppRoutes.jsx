import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Mainlayout from '../layouts/Mainlayout'
import Skeleton from '../components/Skeleton'

let Home = lazy(() => import('../pages/Home')) 
let About = lazy(() => import('../pages/About'))
let Contact = lazy(() => import('../pages/Contact'))
let Product = lazy(() => import('../pages/Product'))   


const AppRoutes = () => {

    let  router = createBrowserRouter([
        {
            path:"/",
            element: <Mainlayout />,
            children : [
                {
                    index : true,
                    element : (
                        <Suspense fallback={<Skeleton />}>
                            <Home />
                        </Suspense>
                    )
                },
                {
                    path : "about",
                    element : <About />
                },
                {
                    path : "contact",
                    element : <Contact />
                },
                {
                    path : "product",
                    element : (
                        <Suspense fallback={<Skeleton />}>
                            <Product />
                        </Suspense>
                    )
                }
            ]
        }

    ])


  return <RouterProvider router={router} />
}

export default AppRoutes