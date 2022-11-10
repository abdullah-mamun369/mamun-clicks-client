import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import AddService from '../../Pages/AddService/AddService';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import Purchase from '../../Pages/Purchase/Purchase';
import ServiceDetails from '../../Pages/Service Details/ServiceDetails';
import Services from '../../Pages/Services/Services';
import SignUp from '../../Pages/SignUp/SignUp';
import Dashboard from '../../Pages/UserDashboard/Dashboard';
import MyReviews from '../../Pages/UserReviews/MyReviews';
import UserReview from '../../Pages/UserReviews/UserReview';

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
            },
            {
                path: '/purchase/:id',
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/services/${params.id}`);
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
            // {
            //     path: '/userreview',
            //     element: <UserReview></UserReview>,
            //     loader: ({ params }) => fetch(`http://localhost:5000/reviews/${params.id}`)
            // }
            {
                path: '/services/add',
                element: <AddService></AddService>
            }
        ]
    }
])