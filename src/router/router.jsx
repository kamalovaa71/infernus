import { createBrowserRouter } from "react-router-dom";

import Root from "../pages/Root";
import CatalogPage from '../pages/CatalogPage'
import SingleProductPage from "../pages/SingleProductPage";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
            {
                path: '/catalog',
                element: <CatalogPage />
            },
            {
                path: '/catalog/:id',
                element: <SingleProductPage/>
            },
        ]
    }

])

export default router