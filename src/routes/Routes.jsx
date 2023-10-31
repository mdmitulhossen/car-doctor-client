import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout.jsx";
import Services from "../pages/Services.jsx";
import Home from "../pages/Home.jsx";
import ServiceDetailsPage from "../pages/ServiceDetailsPage.jsx";
import CheckOutPage from "../pages/CheckOutPage.jsx";


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            { 
                path: '/', 
                element: <Home/>
            },
            {
                path: '/about',
                element: <div>About</div>
            },
            {
                path: '/services',
                element: <Services/>
            },
            {
                path: '/service/:id',
                element: <ServiceDetailsPage/>
            },
            {
                path: '/checkout/:id',
                element: <CheckOutPage/>
            },
            {
                path: '/contact',
                element: <div>Contact</div>
            },
            {
                path: '/blog',
                element: <div>Blog</div>
            },
            {
                path: '/appointment',
                element: <div>appointment</div>
            },
            {
                path: '/login',
                element: <div>login</div>
            }
        ]
    }
])

export default Routes;