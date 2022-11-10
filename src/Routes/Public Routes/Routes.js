import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import AddService from '../../Pages/AddService/AddService';
import Blog from '../../Pages/Blog/Blog';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import Purchase from '../../Pages/Purchase/Purchase';
import ServiceDetails from '../../Pages/Service Details/ServiceDetails';
import Services from '../../Pages/Services/Services';
import SignUp from '../../Pages/SignUp/SignUp';
import Dashboard from '../../Pages/UserDashboard/Dashboard';
import MyReviews from '../../Pages/UserReviews/MyReviews';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: async () => {
                    return fetch('https://assignment-11-server-beta.vercel.app/services');
                },
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/services',
                loader: async () => {
                    return fetch('https://assignment-11-server-beta.vercel.app/services');
                },
                element: <Services></Services>
            },
            {
                path: '/service/:id',
                loader: async ({ params }) => {
                    return fetch(`https://assignment-11-server-beta.vercel.app/services/${params.id}`);
                },
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/purchase/:id',
                loader: async ({ params }) => {
                    return fetch(`https://assignment-11-server-beta.vercel.app/services/${params.id}`);
                },
                element: <Purchase></Purchase>
            },
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            }
            ,
            {
                path: '/myreviews',
                element: <MyReviews></MyReviews>
            },

            {
                path: '/services/add',
                element: <AddService></AddService>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])