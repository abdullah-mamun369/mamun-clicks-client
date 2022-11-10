import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from './Card/Card';
import './Services.css'

const Services = () => {

    const services = useLoaderData();
    const regServices = services.slice(0, 6)


    return (
        <div className=''>

            <img src="https://images.pexels.com/photos/134469/pexels-photo-134469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='mb-20 w-screen h-96' />
            <h1 className='text-3xl font-bold text-primary text-center my-5'>These are Regular Course</h1>

            <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-4 container m-auto'>

                <div className='lg:col-span-4'>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-3 gap-4 mb-10'>
                        {
                            regServices.map(service => <Card key={service._id} service={service}></Card>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;