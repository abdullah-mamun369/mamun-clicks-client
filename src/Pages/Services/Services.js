import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from './Card/Card';
import './Services.css'

const Services = () => {

    const services = useLoaderData();

    return (
        <div className='px-5'>
            <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-4 sidebar-container'>
                <div className='lg:col-span-3'>
                    <div className='grid lg:grid-cols-3 sm:grid-cols-3 gap-4 mb-10'>
                        {
                            services.map(service => <Card key={service._id} service={service}></Card>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;