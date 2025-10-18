import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import userDashboard from "../pages/Dashboard/UserDashboard";
import SellerDashboard from "../pages/Dashboard/SellerDashboard";
import AdminDashboard from "../pages/Dashboard/AdminDashboard";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                Component: Home
            }
        ]
    }, {
       path:'/login',
       Component:Login
    }
    , {
       path:'/signup',
       Component:SignUp
    },
    {
        path:'/userDashboard',
        Component:userDashboard
    },{
        path:'/sellerDashboard',
        Component:SellerDashboard
    },
    {
        path:'/adminDashboard',
        Component:AdminDashboard
    }
])