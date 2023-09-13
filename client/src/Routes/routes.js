import { createBrowserRouter } from "react-router-dom";
import AddDoctor from "../DashboardLayout/Add Doctor/AddDoctor";
import AllUsers from "../DashboardLayout/AllUsers/AllUsers";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import MannageDoctor from "../DashboardLayout/MannageDoctor/MannageDoctor";
import MyAppointment from "../DashboardLayout/MyAppointment/MyAppointment";
import Main from "../layout/Main";
import Appointment from "../Pages/Appointment/Appointment/Appointment";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Payment from "../Pages/Payment/Payment";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/home',
                element:<Home/>
            },
            {
                path:'/appointment',
                element:<Appointment/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/signup',
                element:<SignUp/>
            }
        ],
       
    },
    {
        path:'/dashboard',
        element:<PrivateRoute><DashboardLayout/></PrivateRoute>,
        children:[
            {
                path:'dashboard/myappointment',
                element:<MyAppointment/>
            },
            {
                path:'dashboard/allusers',
                element:<AdminRoute><AllUsers/></AdminRoute>
            },
            {
                path:'dashboard/adddoctor',
                element:<AdminRoute><AddDoctor/></AdminRoute>
            },
            {
                path:'dashboard/mannagedoctor',
                element:<AdminRoute><MannageDoctor/></AdminRoute>
            },
            {
                path:'/dashboard/payment/:id',
                element:<Payment/>,
                loader:({params})=> fetch(`https://doctors-lab-server.vercel.app/bookings/${params.id}`)
               
            },
        ]
    }
])