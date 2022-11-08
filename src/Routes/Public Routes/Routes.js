import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import ServiceDetails from '../../Pages/Service Details/ServiceDetails';
import Services from '../../Pages/Services/Services';
import SignUp from '../../Pages/SignUp/SignUp';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
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
                    return fetch('http://localhost:5000/services');
                },
                element: <Services></Services>
            },
            {
                path: '/service/:id',
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/services/${params.id}`);
                },
                element: <ServiceDetails></ServiceDetails>
            }
        ]
    }
])