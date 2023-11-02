import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout.jsx";
import Services from "../pages/Services.jsx";
import Home from "../pages/Home.jsx";
import ServiceDetailsPage from "../pages/ServiceDetailsPage.jsx";
import CheckOutPage from "../pages/CheckOutPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import SignUpPage from "../pages/SignUpPage.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import ContactPage from "../pages/ContactPage.jsx";
import AppoinmentPage from "../pages/AppoinmentPage.jsx";
import BlogPage from "../pages/BlogPage.jsx";
import ServiceCartPage from "../pages/ServiceCartPage.jsx";


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement:<NotFoundPage/>,
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
                path: '/cart',
                element: <ServiceCartPage/>
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
                element: <ContactPage/>
            },
            {
                path: '/blog',
                element: <BlogPage/>
            },
            {
                path: '/appointment',
                element: <AppoinmentPage/>
            }
        ]
    },
    {
        path: '/login',
        element: <LoginPage/>
    },
    {
        path: '/signup',
        element: <SignUpPage/>
    }
])

export default Routes;