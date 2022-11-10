import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Services/Card/Card';
import './Home.css';

const Home = () => {
    const services = useLoaderData();
    const regServices = services.slice(0, 3);
    const cusServices = services.slice(6, 50)

    return (

        <div className='website-container'>
            {/* // Slider start */}
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>

            {/* // Service Cart Start */}
            <div className='container m-auto'>
                <div className='my-20'>
                    <h1 className='text-3xl font-bold text-primary text-center my-5'>These are Regular Course</h1>
                    <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-4 sidebar-container'>
                        <div className='lg:col-span-4'>
                            <div className='grid lg:grid-cols-3 sm:grid-cols-3 gap-4 mb-10'>
                                {
                                    regServices.map(service => <Card key={service._id} service={service}></Card>)
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {/* 1st-section */}
                <div className='my-20'>
                    <h1 className='text-4xl font-bold text-primary text-center my-5'>About US</h1>
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure className='w-96'><img src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">New album is released!</h2>
                            <p>Click the button to listen on Spotiwhy app.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Listen</button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Your Added Review */}
                <div className='my-20'>
                    <h1 className='text-4xl font-bold text-primary text-center my-5'>These are Your Added Course</h1>
                    <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-4 sidebar-container'>
                        <div className='lg:col-span-4'>
                            <div className='grid lg:grid-cols-3 sm:grid-cols-3 gap-4 mb-10'>
                                {
                                    cusServices.map(service => <Card key={service._id} service={service}></Card>)
                                }
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our clients */}
                <div className='my-20'>
                    <h1 className='text-4xl font-bold text-primary text-center my-5'>Our Clients</h1>
                    <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-4 sidebar-container'>
                        <div className='lg:col-span-4'>
                            <div className='grid lg:grid-cols-3 sm:grid-cols-3 gap-4 mb-10'>
                                {
                                    services.map(service => <Card key={service._id} service={service}></Card>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;