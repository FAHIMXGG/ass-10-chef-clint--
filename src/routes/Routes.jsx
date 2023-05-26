import { Navigate, createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Login from "../page/login/Login/Login";
import Reg from "../page/login/reg/Reg";
import Main from "../Layouts/Main";
import Chef from "../Home/Chef/Chef";
import Info from "../page/ChefInfo/Info/Info";
import ChefLayout from "../Layouts/ChefLayout";

import PrivateRoute from "./PrivateRoute";
import Blog from "../page/Blog/Blog";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import About from "../page/About/About";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layouts></Layouts>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Navigate to="/home"></Navigate>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/reg',
                element: <Reg></Reg>
            },
            {
                path: '/blog',
                element: <Blog></Blog>

            },
           
            {
                path: '/about',
                element: <About></About>

            }
           
            
        ]



    },
    // {
    //     path: '/chef/:id',
    //     element: <ChefInfo></ChefInfo>,
    //     loader: ({params}) => fetch(`https://chef-recipe-server-fahimxgg.vercel.app/chef/${params.id}`)
    // },
    {
        path: 'home',
        element: <Main></Main>,
        children: [
            // {
            //     path: 'home',
            //     element: <Chef></Chef>,
            //     loader: () => fetch('https://chef-recipe-server-fahimxgg.vercel.app/chef/')
            // }
        ]

    },
    {
        path: 'chef',
        element: <ChefLayout></ChefLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><Info></Info></PrivateRoute>,
                loader: ({params}) => fetch(`https://chef-recipe-server-fahimxgg.vercel.app/chef/${params.id}`)
            }
        ]

    }
    
])

export default router;