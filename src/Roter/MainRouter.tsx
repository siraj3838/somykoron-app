
import App from '@/App'
import ProductsDetails from '@/scenes/ProductsDetails'
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

type Props = {}

const MainRouter = createBrowserRouter([
    {
        path: '/',
        element: <App></App>
    },
    {
        path: '/productDetails/:title',
        element: <ProductsDetails></ProductsDetails>
    }
])

export default MainRouter